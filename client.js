import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // SPHERE
  const sphereSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat,
  );
  sphereSurface.setAngle(0, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'JOJO KAMPANK' }),
    sphereSurface,
  );

  r360.renderToLocation(
    r360.createRoot('Sphere'),
    r360.getDefaultLocation(),
  );

  r360.compositor.setBackground(r360.getAssetURL('rooms.jpg'));
}

window.React360 = {init};
