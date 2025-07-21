import React from "react";

const ExperienceAscii = () => {
  const asciiArt = `
                __conttinuouscrea__
         tionofevid          enceof,
      xperiencecontiu          usevid,
    enceof     evicontinuouscreat     ionof,
   eviden    ceof'            conti     nuous,
  creatio     nof     _________     eviden    ceof,
 crea    tion    ofevidevidenceof    expe    rien,
ceofe   vide   nce"            cont   inuo    uscr,
eati   onof   expe    riencof    evide   ncef    or
cont   inuo   uscr   eati  onof   evid   ence    of
expe   rien   ceof   cont   inuo   uscr   eati   ono
fexp   erie    nce   ofex   peri   ence   ofev   ide
nceo   fexp   erie    """"   ofex   peri   ence   of'
cont   inuo    uscr         eati   onof   expe    rie'
nceo   fexp    eriencofexpe   rienc   eofe    vide
nceo    fexp     erienc     eofe   vide    ncef'
 cont    inuo     uscre          atio    nofevid'
   ence    ofevide          ncef    orex    peri'
     ence      ofexpcontiu     ousex    peri'
       ence                   ofex    peri'
          enceofevi       denceofexpe
              riencoevidenceofe

                    `;

  return (
    <div className="mx-auto mt-24">
      <pre
        className="!font-mono text-[7px] font-bold leading-[7px] tracking-[0.2px] sm:text-[10px] sm:leading-[11px]"
        style={{ whiteSpace: "pre", fontFamily: "monospace" }}
      >
        {asciiArt}
      </pre>
    </div>
  );
};

export default ExperienceAscii;
