import { Gun, GunDestruction, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const PARA_308: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "PARA-308";
    catagory: WeaponCatagory = "assault rifle";
    acog = true;

    damage = 47;
    fireRate = 650;
    destruction: GunDestruction = "low";

    magazine = 31;
    capacity = 181;
    reloadSpeed = 3.3;
    
    controlDifficulty = 2;
    adsTime = 0.47;
    hipAccuracy = 60;

    mobility: Mobility = "0%";
})();