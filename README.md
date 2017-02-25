# isomorphic-test

End goal: A server rendered Express.js application which can be selectively upgraded to isomorphic components.

This repo comtains a MVP Webpack configuration that makes this possible. Isomorphic components are bundled using DllPlugin. At runtime the server JS can inspect the DLL manifest files and see which bundles need to be included on the page for the current request. This allows us to ship only the bundles that are needed for a specific page view. 
