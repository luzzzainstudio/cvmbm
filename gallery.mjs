import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("mbm_site_content");
  const url = new URL(req.url);
  const section = url.searchParams.get("section") || "gallery";

  // Keamanan: Cek hash lama atau Token Netlify Identity
  const adminHash = process.env.ADMIN_HASH;
  const userHash = req.headers.get("x-admin-hash");
  
  // Jika menggunakan Netlify Identity, context.clientContext akan tersedia
  const user = context.clientContext?.user;
  const isAuthenticated = (userHash === adminHash) || (user !== undefined);

  // Endpoint khusus untuk cek login dari frontend
  if (url.searchParams.get("action") === "auth") {
    return new Response(JSON.stringify({ success: isAuthenticated }), { status: isAuthenticated ? 200 : 401 });
  }

  // GET: Mengambil data berdasarkan section
  if (req.method === "GET") {
    const list = await store.list();
    const items = [];
    for (const item of list.blobs) {
      if (item.key.startsWith(section)) {
        const data = await store.get(item.key, { type: "json" });
        items.push(data);
      }
    }
    return new Response(JSON.stringify(items), {
      headers: { "Content-Type": "application/json" }
    });
  }

  // POST: Menyimpan foto/konten baru
  if (req.method === "POST") {
    if (!isAuthenticated) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const payload = await req.json();
    
    // Kunci unik: section_id (misal: hero_main, project_123, gallery_123)
    const id = payload.id || payload.created;
    const key = `${section}_${id}`;
    
    await store.setJSON(key, payload);
    return new Response(JSON.stringify({ success: true, key }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  // DELETE: Menghapus foto dari cloud
  if (req.method === "DELETE") {
    if (!isAuthenticated) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const id = url.searchParams.get("id");
    await store.delete(`${section}_${id}`);
    return new Response(JSON.stringify({ success: true }));
  }

  return new Response("Method not allowed", { status: 405 });
};