import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const M590A1: Gun = new (class implements Gun {
    type: GunType = "primary";
    name = "M590A1";
    catagory: WeaponCatagory = "shotgun";
    acog = false;

    damage = 48;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "full";

    magazine = 7;
    capacity = 50;
    reloadSpeed = 1.6;
    
    controlDifficulty = 1;
    adsTime = 0.32;
    hipAccuracy = 60;

    mobility: Mobility = "5%";
})();