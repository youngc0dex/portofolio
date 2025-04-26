/**
 * Helper function to generate correct image paths for both local development and GitHub Pages
 * @param {string} relativePath - The relative path of the image from the public folder
 * @returns {string} - The correctly formatted path for the current environment
 */
export const getImagePath = (relativePath) => {
  // If the path already starts with http/https or process.env.PUBLIC_URL, return as is
  if (relativePath.startsWith('http') || relativePath.startsWith(process.env.PUBLIC_URL)) {
    return relativePath;
  }

  // Remove leading slash if it exists
  const cleanPath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
  
  // Return path with PUBLIC_URL prepended
  return `${process.env.PUBLIC_URL}/${cleanPath}`;
}; 