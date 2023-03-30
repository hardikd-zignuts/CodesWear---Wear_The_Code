export default function handler(req, res) {
    const { category, name } = req.query
    
    res.status(200).json([category, name])
}
