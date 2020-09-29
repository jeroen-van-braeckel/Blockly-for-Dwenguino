import DwenguinoBlockly from "../../js/src/DwenguinoBlockly.js"
import { EVENT_NAMES } from "../../js/src/logging/EventNames.js"
import { tutorialTargets } from "../tutorialTargets.js"

let poem1 = {
      category: "wegostem",
      targets: [tutorialTargets.simulatorButton,
                tutorialTargets.workspaceArea,
                tutorialTargets.simulatorStartButton,
                tutorialTargets.simulatorStopButton,
                tutorialTargets.workspaceArea,
                tutorialTargets.workspaceArea,
                tutorialTargets.simulatorStartButton,
                tutorialTargets.dwenguino],
      placements: ["left", "top", "left", "left", "top", "top", "left", "left"],
      nrOfSteps: 6,
      xOffsets: [0, "center", 0, 0, "center", "center", 0],
      yOffsets: [0, "top", 0, 0, "top", "top", 0],
      steps: [],
      // Create the steps array dynamically by using the different arrays
      initSteps: function(){
        var i;
        for (i = 0 ; i < this.nrOfSteps ; i++){
          this.steps.push({
            title: MSG.tutorials.poem1.stepTitles[i],
            content: MSG.tutorials.poem1.stepContents[i],
            target: this.targets[i],
            placement: this.placements[i],
            showCloseButton:"true",
            width: 400,
            xOffset: this.xOffsets[i],
            yOffset: this.yOffsets[i],
          });
        }
      },
      id: "tutsPoem1",
      label: MSG.tutsPoem1,
      onStart: function(){
        DwenguinoBlockly.loadFileXmlIntoWorkspace('<xml xmlns="http://www.w3.org/1999/xhtml"><block type="setup_loop_structure" id="ndSZof?3RjcH}j2Lp/XZ" x="-20" y="56"><statement name="LOOP"><block type="dwenguino_lcd" id="P~z0QTD+UA%Wvi-1|pJi"><value name="text"><block type="text" id="48"><field name="TEXT">Ik fiets</field></block></value><value name="line_number"><block type="char_type" id="53"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="58"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="8^{{=Y9|}Yjf}J~*A}Ug"><value name="DELAY_TIME"><block type="char_type" id="TO?6iQPh}HsK1u6/()KQ"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="mZ@64g4j].F$R?6I2;|e"><next><block type="dwenguino_delay" id="]ou@Z_|5^GvXMS68m4Y#"><value name="DELAY_TIME"><block type="char_type" id="LNrn.uWc!l{k)lWdw9xu"><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="U37Ix-]Ulb(y%rp+HmMK"><value name="text"><block type="text" id="62=RnV.lI.d94k41Y|Wg"><field name="TEXT">en fiets</field></block></value><value name="line_number"><block type="char_type" id="XPa1w4n/89hzWxAri?_Z"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="Mj.b?|/ktlgxW9^Lv+GB"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="qA+kIka6dC`XK2Zat.^e"><value name="DELAY_TIME"><block type="char_type" id="WxmGodyzXxbbWo)/zP0j"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="m5J96Dy^pC:gh?H)nGT#"><next><block type="dwenguino_delay" id="%?k#,bPe1-.s6Z7_S8qn"><value name="DELAY_TIME"><block type="char_type" id="!(gLCQ_G4;$(a`n7`O[="><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="TMkN#X]!w%McWa+(x=`9"><value name="text"><block type="text" id="IZ|[v`1EEX*`RQf+b5qF"><field name="TEXT">en fiets</field></block></value><value name="line_number"><block type="char_type" id="iu*fPG%V5+ylVMoYt^jx"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="xL-yEduk#tQd$~t|1xBe"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="}KCE%K7;EC#vmey7^_Jo"><value name="DELAY_TIME"><block type="char_type" id="{Qw5:{GSy/lpM]ZiaD]!"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="FS#9!f68];h@Hgj8D`EH"><next><block type="dwenguino_delay" id="d,ppwLH6:]IWf8u,D}~S"><value name="DELAY_TIME"><block type="char_type" id="ve7y8sxdW$N[k3Lpj4K2"><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="0j6gbZ`fQp^lzmur:H(i"><value name="text"><block type="text" id="-f]hE(|MCiW#54W#}kLK"><field name="TEXT">en fiets</field></block></value><value name="line_number"><block type="char_type" id="K)vYa`Z)#deQ!1}q{H.Q"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="LrH3gTKol.2*[p4jH4D0"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="C0:#WaEgbVZ[r~G@q|8b"><value name="DELAY_TIME"><block type="char_type" id="gZQ`(0$Bx-3=@BNWMrxO"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="%[VVkF7@588nv1he[fA+"><next><block type="dwenguino_delay" id="u-M}Ap5N:_2+,:-`@4?E"><value name="DELAY_TIME"><block type="char_type" id="+V7?6g(f`(Da3.R+Ok2-"><field name="BITMASK">1000</field></block></value><next><block type="dwenguino_lcd" id="4;?GCk$#1]UKqc*JpCtJ"><value name="text"><block type="text" id=".p6;|WP*pK!5P)^Ibi,-"><field name="TEXT">tegen de wind.</field></block></value><value name="line_number"><block type="char_type" id="yWI%[,$r2zZ.PH0((f:i"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="t_H?BNzNHvT2@CNp%@#7"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="19c_V.(8_w+v6);fCwfb"><value name="DELAY_TIME"><block type="char_type" id="6WH|Q$Q])3;UFw!KD!T?"><field name="BITMASK">1000</field></block></value><next><block type="dwenguino_delay" id="TXE6?Wg@/oIBY$p[Ga`z"><value name="DELAY_TIME"><block type="char_type" id="%cORf5sbBjB-.(-iG@AH"><field name="BITMASK">1000</field></block></value><next><block type="dwenguino_lcd" id=";DtXuybn,xF/FOwjCF:4"><value name="text"><block type="text" id="t^{u]hkT)4L^+p!F[G2["><field name="TEXT">Trappen</field></block></value><value name="line_number"><block type="char_type" id="0p`XD[NDyMNta|%A7t/3"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="X;|n1^p*Chsc^vz,C@eT"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="wJt.NHYCT?xxFT0a|l-S"><value name="DELAY_TIME"><block type="char_type" id="mo?t2aHT*Uo*nC.GuTk}"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="m2JGGH-h$jb)lM9CXYe0"><next><block type="dwenguino_delay" id="j?55rb3}E;+|Co*S`hM="><value name="DELAY_TIME"><block type="char_type" id="1BqO7(NNgg),p%MZHjA,"><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id=":(tHu6%DX8iR?metFeL4"><value name="text"><block type="text" id="OYCuh1oaO@[PhnMV)b[J"><field name="TEXT">en trappen</field></block></value><value name="line_number"><block type="char_type" id="mXr+iQF]OYanHl6]k-vM"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="eqvW,Y~do5;yeOS16mZ!"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="jNUVPY(fkulqIW406a;S"><value name="DELAY_TIME"><block type="char_type" id="?T{RaN{N^O?S^,m2uL[F"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="MyQf_q(vqm-4Kx_ho/$u"><next><block type="dwenguino_delay" id="VD_W^T{~dxNxg+ZJRrXi"><value name="DELAY_TIME"><block type="char_type" id="+{%R9Y^?n4lmJ)~5/cuF"><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="/9?@iKh%N%b029DX4a/y"><value name="text"><block type="text" id="wfjtaN2m3P6y}W+m[1/e"><field name="TEXT">en trappen</field></block></value><value name="line_number"><block type="char_type" id="INY`bm#sWx3kX0IL?kXK"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="I.bF136;-%aT?*HI$X+2"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="OB@:R;FWiU0/DWh~BdPW"><value name="DELAY_TIME"><block type="char_type" id="kZ[ges6!FQi[V[*cMA12"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="|O~qL_TJ__o~oivI7foI"><next><block type="dwenguino_delay" id="Qoi4Q0WT!4n-a04+G4%V"><value name="DELAY_TIME"><block type="char_type" id=";bjjtx40w|%CvcF`r~:j"><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="@4@sN;=}m^8TF;t(nAer"><value name="text"><block type="text" id="ikdC`Zv[xMl0{]pR)fX#"><field name="TEXT">en trappen</field></block></value><value name="line_number"><block type="char_type" id="lSH?~`gnf%JviI:2}XJa"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="CVE!tF8@md9U@rJgE4Dp"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="T%l(=V4s=SMhd}1vUxhO"><value name="DELAY_TIME"><block type="char_type" id="kvZqY}2@Wx=.oK}MQE*`"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="drLvsnCiFEO=F@]r#v4Q"><next><block type="dwenguino_delay" id="%MnMga`gWN]%+32u!RgU"><value name="DELAY_TIME"><block type="char_type" id="5kN0m5!C?@CWtjguYWE?"><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="6s|0$NVe+8umnbfq{NMT"><value name="text"><block type="text" id="~L+6,{(?3yAP6xK,efvE"><field name="TEXT">tot ik de</field></block></value><value name="line_number"><block type="char_type" id="qKk!A~k$:Mfer04ru%qy"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="}4;f_3pfEL]+mV|2ERvU"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="5y|#JTSHq_7OSw}[$Xs2"><value name="DELAY_TIME"><block type="char_type" id="GK;j0.zlVIIBGr=*4/}D"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="{peMF%hI`]z?9xGfcz:-"><next><block type="dwenguino_delay" id="h~OBWExeL3ARveT/(HrJ"><value name="DELAY_TIME"><block type="char_type" id="i4cO:Zk3g@8H.c~CE+p!"><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="Tt-^0U-/AlU[zNYL*2i~"><value name="text"><block type="text" id="eU6fM4.r;iyJT%0QtE%X"><field name="TEXT">terugweg</field></block></value><value name="line_number"><block type="char_type" id=";A@Mjgew#J6ly=Rrne^J"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="Zwb0f$9HU@EA`Csj`9X;"><field name="BITMASK">0</field></block></value><next><block type="dwenguino_delay" id="2,dHZC$8Bapou6cguPPq"><value name="DELAY_TIME"><block type="char_type" id=";$}G/:ENCQU,IZC7Ugeu"><field name="BITMASK">1000</field></block></value><next><block type="clear_lcd" id="a$8|j|+r8;K2l:531Ks8"><next><block type="dwenguino_delay" id="lYLnC,T[q.O{L{bGiaWj"><value name="DELAY_TIME"><block type="char_type" id="4=dUiv1|T{_Ka`gdQe3."><field name="BITMASK">500</field></block></value><next><block type="dwenguino_lcd" id="r;3ncPFmQh!eK_WX9#_A"><value name="text"><block type="text" id="wdH=[^XHUAYF,gw26L!P"><field name="TEXT">vind</field></block></value><value name="line_number"><block type="char_type" id="_3{h1-PT^:FLw[KYSgiR"><field name="BITMASK">0</field></block></value><value name="character_number"><block type="char_type" id="8J87Y.-o)HM[~u{ma$p-"><field name="BITMASK">0</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>');
      },
      onEnd: function(){
        DwenguinoBlockly.tutorialMenu.endTutorial();
      },
      onNext: function(){
        DwenguinoBlockly.logger.recordEvent(DwenguinoBlockly.logger.createEvent(EVENT_NAMES.tutorialNextStep, DwenguinoBlockly.logger.tutorialIdSetting));
        console.log(DwenguinoBlockly.logger.createEvent(EVENT_NAMES.tutorialNextStep, DwenguinoBlockly.logger.tutorialIdSetting));
      },
      onPrev: function(){
        DwenguinoBlockly.logger.recordEvent(DwenguinoBlockly.logger.createEvent(EVENT_NAMEStutorialPrevStep, DwenguinoBlockly.logger.tutorialIdSetting));
        console.log(DwenguinoBlockly.logger.createEvent(EVENT_NAMES.tutorialPrevStep, DwenguinoBlockly.logger.tutorialIdSetting));
      },
  };


export { poem1 }