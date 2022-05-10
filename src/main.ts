import file from '@fontsource/cherry-swash/files/cherry-swash-latin-400-normal.woff2';

(async function (d: Document) {
    const fontName = 'Cherry Swash';
    const font = new FontFace(fontName, `url(${file})`);
    font.load().then(() => {
        (d.fonts as any).add(font);
        d.querySelectorAll<HTMLElement>('.container').forEach((element) => {
            element.style.fontFamily = `'${fontName}', cursive`;
        });
    });
})(document);
