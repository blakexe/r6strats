import { Gun, GunCatagory, GunDestruction, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const G36C: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "assault rifle";
    acog = true;

    damage = 38;
    fireRate = 780;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.3;
    
    adsTime = 0.47;
    mobility: Mobility = "0%";
})();