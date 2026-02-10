import { createArtifact } from "../services/artifact.service.js";

export const createArtifactController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user?.id || req.body.userId; // fallback if no auth middleware
    const artifact = await createArtifact({ title, content, userId });
    res.status(201).json({ success: true, artifact });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
