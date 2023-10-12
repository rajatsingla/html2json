
import { JSDOM } from 'jsdom';

export function moveInlineImagesToBlockLevel(html) {
    // Parse the HTML string
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Get all images
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        let parent = img.parentNode;
        let depth = 0;
        // Check if the parent is a block element
        while (parent && depth < 3) {
          if (parent && parent.tagName.toLowerCase() === 'p') {
              // Insert the image after the parent block element
              parent.parentNode.insertBefore(img, parent);
              break;
          }
          parent = parent.parentNode;
          depth++;
        }
    });

    // Serialize the modified DOM structure back to an HTML string
    return dom.serialize();
}