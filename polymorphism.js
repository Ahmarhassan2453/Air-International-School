class Camera {
    takePicture() {
        console.log('Taking a standard picture...');
    }
}

class AdvancedCamera extends Camera {
    // Overriding the takePicture method
    takePicture() {
        console.log('Taking a high-resolution picture with night mode!');
    }
}

// Usage
const basicCamera = new Camera();
const proCamera = new AdvancedCamera();

basicCamera.takePicture(); // Taking a standard picture...
proCamera.takePicture();   // Taking a high-resolution picture with night mode!
