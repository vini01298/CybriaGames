      const getProjectData = (function() {
        const storage = scaffolding.storage;
        storage.onprogress = (total, loaded) => {
          setProgress(interpolate(0.75, 0.98, loaded / total));
        };
        
        let zip;
        // Allow zip to be GC'd after project loads
        vm.runtime.on('PROJECT_LOADED', () => (zip = null));
        const findFileInZip = (path) => zip.file(path) || zip.file(new RegExp("^([^/]*/)?" + path + "$"))[0];
        storage.addHelper({
          load: (assetType, assetId, dataFormat) => {
            if (!zip) {
              throw new Error('Zip is not loaded or has been closed');
            }
            const path = assetId + '.' + dataFormat;
            const file = findFileInZip(path);
            if (!file) {
              throw new Error('Asset is not in zip: ' + path)
            }
            return file
              .async('uint8array')
              .then((data) => storage.createAsset(assetType, dataFormat, data, assetId));
          }
        });
        return () => (async () => {
        const base85decode = e=>{const t=e=>(40===e&&(e=60),41===e&&(e=62),e-42),n=e.indexOf(","),c=+e.substring(0,n).split("").map(e=>String.fromCharCode(e.charCodeAt(0)-49)).join(""),o=new ArrayBuffer((s=c)%4==0?s:s+(4-s%4));var s;const i=new Uint32Array(o);for(let c=n+1,o=0;c<e.length;c+=5,o++)i[o]=85*t(e.charCodeAt(c+4))*85*85*85+85*t(e.charCodeAt(c+3))*85*85+85*t(e.charCodeAt(c+2))*85+85*t(e.charCodeAt(c+1))+t(e.charCodeAt(c));return new Uint8Array(o,0,c)};
        const dataElements = Array.from(document.querySelectorAll('script[type="p4-project"]'));
        const result = base85decode(dataElements.map(i => i.textContent).join(''));
        dataElements.forEach(i => i.remove());
        return result;
      })().then(async (data) => {
          zip = await Scaffolding.JSZip.loadAsync(data);
          const file = findFileInZip('project.json');
          if (!file) {
            throw new Error('project.json is not in zip');
          }
          return file.async('arraybuffer');
        });
      })();
