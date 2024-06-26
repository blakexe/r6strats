import { Gun, GunDestruction, GunFireRate, GunType } from "../../Gun";
import { Mobility, WeaponCatagory } from "../../Weapon";

export const Mk1_9mm: Gun = new (class implements Gun {
    type: GunType = "secondary";
    name = "Mk1 9mm";
    catagory: WeaponCatagory = "handgun";
    acog = false;

    damage = 48;
    fireRate: GunFireRate = "single shot";
    destruction: GunDestruction = "low";

    magazine = 14;
    capacity = 105;
    reloadSpeed = 1.9;
    
    controlDifficulty = 2;
    adsTime = 0.22;
    hipAccuracy = 75;

    mobility: Mobility = "10%";
})();