async function dbReadFile(fileName) {
    try {
        /* Read file */
        let response = await fetch("data/words_FIN.csv"); // Get file info
        let text     = await response.text();             // Get file data

        /* Split text to array */
        let lines = text.split("\n");

        /* Trim all strings */
        let trimmed = lines.map(line => line.trim());

        /* Filter away empty strings */
        let filtered = trimmed.filter(line => line !== "");

        /* Convert array to set (faster) */
        let stringSet = new Set(filtered);
    } catch (error) {
        console.error("Error loading file:", error);
    }
}
