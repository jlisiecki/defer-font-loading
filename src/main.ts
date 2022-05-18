import cherrySwash from '@fontsource/cherry-swash/files/cherry-swash-latin-400-normal.woff2';
import aclonica from '@fontsource/aclonica/files/aclonica-latin-400-normal.woff2';
import boogaloo from '@fontsource/boogaloo/files/boogaloo-latin-400-normal.woff2';
import cambay from '@fontsource/cambay/files/cambay-latin-400-normal.woff2';
import krub from '@fontsource/krub/files/krub-latin-400-normal.woff2';

interface FontInfo {
    file: string;
    name: string;
}

const fontsInfo: FontInfo[] = [
    { file: cherrySwash, name: 'cherry-swash' },
    { file: aclonica, name: 'aclonica' },
    { file: boogaloo, name: 'boogaloo' },
    { file: cambay, name: 'cambay' },
    { file: krub, name: 'krub' }
];

function deferFont(fontInfo: FontInfo, d: Document) {
    const font = new FontFace(fontInfo.name, `url(${fontInfo.file})`);
    font.load().then(() => {
        (d.fonts as any).add(font);
        d.querySelectorAll<HTMLElement>('.' + fontInfo.name).forEach(
            (element) => {
                element.style.fontFamily = fontInfo.name;
            }
        );
    });
}

function deferFonts(fontsInfo: FontInfo[], d: Document) {
    for (let fontInfo of fontsInfo) deferFont(fontInfo, d);
}

deferFonts(fontsInfo, document);
