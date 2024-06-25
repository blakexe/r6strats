import { Gun, GunCatagory, GunDestruction, GunType } from "../Gun";
import { Mobility } from "../Weapon";

export const Five56XI: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: GunCatagory = "assault rifle";
    acog = true;

    damage = 47;
    fireRate = 690;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.7;
    
    adsTime = 0.47;
    mobility: Mobility = "0%";
})();