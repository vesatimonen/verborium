async function dbReadFile(fileName) {
    try {
        /* Read file */
        let response = await fetch(fileName); // Get file info
        let text     = await response.text(); // Get file data

        /* Split text to array */
        let lines = text.split("\n");

        /* Trim all strings */
        let trimmed = lines.map(line => line.trim());

        /* Filter away empty strings */
        let filtered = trimmed.filter(line => line !== "");

        /* Convert values to uppercase */
        let uppered = filtered.map(str => str.toUpperCase());

        /* Convert array to set (faster) */
        let stringSet = new Set(uppered);

        return stringSet;
    } catch (error) {
        console.error("Error loading file:", error);
    }
}
