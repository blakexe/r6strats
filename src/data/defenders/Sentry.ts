import { Specialty, Value } from "../Operator";
import { Defender, DefenderGadget } from "../Defender";
import { C75_Auto } from "../weapons/machine pistol/C75 Auto";
import { Super_Shorty } from "../weapons/shotgun/Super Shorty";
import { Commando_9 } from "../weapons/assault rifle/Commando 9";
import { M870 } from "../weapons/shotgun/M870";

export const Sentry: Defender = new (class extends Defender {
    specialties: Specialty[] = [ "support", ];
    health: Value = 2;
    speed: Value = 2;
    primary = [ Commando_9, M870 ];
    secondary = [ C75_Auto, Super_Shorty ];
    gadgets: DefenderGadget[] = [ "barbed wire", "bulletproof camera", "deployable shield", "observation blocker", "impact grenade", "nitro cell", "proximity alarm" ];
})();