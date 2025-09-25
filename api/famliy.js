export default async function handler(req, res) {
  const { cnic } = req.query;

  if (!cnic) {
    return res.status(400).json({ error: "CNIC required" });
  }

  try {
    const response = await fetch(
      "https://shadowpaksim.xyz/familytreeshadowprivate.php?cnic=" + cnic
    );

    const data = await response.text();
    res.status(200).send(data);

  } catch (error) {
    res.status(500).json({ error: "API error", details: error.message });
  }
}
