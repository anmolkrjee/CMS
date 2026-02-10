
import Artifact from "../models/artifact.js";

export const createArtifact = async ({
    title, 
    content,
    userId
}) => {
    if (!title || !content) {
        throw new Error("Title and content are required");
    }
    if (!userId) {
        throw new Error("User ID is required");
    }
    const artifact = await Artifact.create({
        title,
        content,
        author: userId
    });
    return artifact;
}

