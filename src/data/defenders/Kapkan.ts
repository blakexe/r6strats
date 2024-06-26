import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { SASG_12 } from "../weapons/shotgun/SASG_12";
import { PMM } from "../weapons/handgun/PMM";
import { GSh_18 } from "../weapons/handgun/GSh-18";
import { NineX19VSN } from "../weapons/submachine gun/9x19VSN";

export const Kapkan: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "anti-entry", "trapper" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ NineX19VSN, SASG_12 ];
    secondary = [ PMM, GSh_18 ];
    gadgets: DefenderGadget[] = [ "bulletproof camera", "nitro cell" ];
})();