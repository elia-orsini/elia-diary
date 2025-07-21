import React from "react";

const AsciiArt = ({ imageCount }: { imageCount: number }) => {
  const asciiArt = `
                _w##g_${imageCount}_TOTAL_IMAGES_@Nw__
              _g#@0F_a*F#  _*F9m_ ,F9*__9NG#g_
           _mN#F  aM"    #p"    !q@    9NL "9#Qu_
          g#MF _pP"L  _g@"9L_  _g""#__  g"9w_ 0N#p
        _0F jL*"   7_wF     #_gF     9gjF   "bJ  9h_
       j#  gAF    _@NL     _g@EV      J@u_    2#_  #_
      ,FF_#" 9_ _#"  "b_  g@   ERY  _#"  !q_ jF "*_09_
      F N"    #p"      Ng@       THI"      "w@    "# t
     j p#    g"9_     g@"9_      NG_IS     gF"q    Pb L
     0J  k _@   9g_ j#"   "b_  j#"   _CO _d"   q_ g  ##
     #F  'NF     "#g"       "Md"       NNE      9W"  j#
     #k  jFb_    g@"q_     _*"9m_      CTED    _#Np  J#
     tApjF  9g  J"   9M_ _m"    9%_ _*"   "#  gF  9_jNF
      k'N    "q#       9g@        #gF       ##"    #"j
      '_0q_   #"q_    _&"9p_    _g"'L_    _*"#   jAF,'
       9# "b_j   "b_ g"    *g _gF    9_ g#"  "L_*"qNF
        "b_ "#_    "NL      _B#      _I@     j#" _#"
          NM_0"*g_ j""9u_  gP  q_  _w@ ]_ _g*"F_g@
           "NNh_ !w#_   9#g"    "m*"   _#*" _dN@"
              9##g_0@q__ #"4_  j*"k __*NF_g#@P"
                "9NN#gIPNL_ "b@" _2M"Lg#N@F"
                    ""P@*NN#gEZgNN@#@P""
                    `;

  return (
    <div className="mx-auto my-16 pr-6">
      <pre
        className="!font-mono text-[7px] font-bold leading-[7px] tracking-[0.2px] sm:text-[10px] sm:leading-[11px]"
        style={{ whiteSpace: "pre", fontFamily: "monospace" }}
      >
        {asciiArt}
      </pre>
    </div>
  );
};

export default AsciiArt;
