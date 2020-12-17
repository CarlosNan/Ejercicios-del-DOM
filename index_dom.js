

import hamburgerMenu from "./hamburger_menu.js";
import {reloj,alarm} from "./relojAlarm.js";

document.addEventListener("DOMContentLoaded",(e)=>{//cargamos al inicio de la pagina, esto es lo correcto

hamburgerMenu(".panel-btn");
reloj(".iReloj",".dReloj");
alarm(".iAlarma",".dAlarma");
});