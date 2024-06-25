import { Gun, GunDestruction, GunFireRate, GunType } from "../Gun";
import { Mobility, WeaponCatagory } from "../Weapon";

export const CAMRS: Gun = new (class implements Gun {
    type: GunType = "primary";
    catagory: WeaponCatagory = "marksman rifle";
    acog = true;

    damage = 69;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "high";

    magazine = 21;
    capacity = 141;
    reloadSpeed = 3.4;
    
    adsTime = 0.47;
    mobility: Mobility = "5%";
})();