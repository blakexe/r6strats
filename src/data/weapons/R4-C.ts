import { Gun, GunCatagory, GunDestruction, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const R4_C: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "assault rifle";
    acog = true;

    damage = 39;
    fireRate = 860;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.4;
    
    adsTime = 0.44;
    mobility: Mobility = "0%";
})();