export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const cards = ["AKMN.jpg", "DTMP.jpg", "DYNS.jpeg", "KJUN.webp", "MTFN.jpg", "NMDI.jpeg", "VPTN.jpg", "XIJP.jpg"];
    res.status(200).json(cards);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
