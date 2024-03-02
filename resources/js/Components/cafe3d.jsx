import React, { useEffect } from 'react';

const ModelViewerComponent = () => {
  useEffect(() => {
    // Cargar model-viewer
    const modelViewer = document.createElement('model-viewer');
    modelViewer.src = 'https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/coffee_bean.glb?v=1699738122267';
    
    
    modelViewer.alt = 'Modelo 3D';
    modelViewer.autoRotate = true;
    modelViewer.cameraControls = true;
    modelViewer['ar'] = true;
    modelViewer['ar-modes'] = 'webxr scene-viewer quick-look';
    modelViewer['ar-scale'] = 'auto';

    // Agregar el componente model-viewer al DOM
    document.getElementById('model-viewer-container').appendChild(modelViewer);
  }, []);

  return (
         <div>
         <div id="model-viewer-container"></div>
      </div>
     );
};

export default ModelViewerComponent;
