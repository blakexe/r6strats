import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { ARX200 } from "../weapons/assault rifle/ARX200";
import { G36C } from "../weapons/assault rifle/G36C";
import { GONNE_6 } from "../weapons/hand cannon/GONNE-6";
import { MK1_9mm } from "../weapons/handgun/MK1 9mm";

export const Iana: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "front-line", "intel" ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ ARX200, G36C ];
    secondary = [ MK1_9mm, GONNE_6 ];
    gadgets: AttackerGadget[] = [ "impact emp grenade", "smoke grenade" ];
})();