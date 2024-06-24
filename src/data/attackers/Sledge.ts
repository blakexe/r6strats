import { Attacker, AttackerGadget } from "../Attacker";
import { Specialty, Value } from "../Operator";
import { L85A2 } from "../weapons/L85A2";
import { M590A1 } from "../weapons/M590A1";
import { P226_MK_25 } from "../weapons/P226 MK 25";

export const Sledge: Attacker = new (class implements Attacker {
    specialties: Specialty[] = [ "breach", "anti-gadget" ];
    health: Value = 3;
    speed: Value = 1;
    primary = [ M590A1, L85A2 ];
    secondary = [ P226_MK_25 ];
    gadgets: AttackerGadget[] = [ "frag grenade", "stun grenade", "impact emp grenade"];
})();