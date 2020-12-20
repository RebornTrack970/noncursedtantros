Events.on(ClientLoadEvent, () => {



    const tontontros = new Planet("tontontros", Planets.sun, 3, 1.07);
    tontontros.generator = new TantrosPlanetGenerator();
    tontontros.mesh = new HexMesh(tontontros, 8);
    tontontros.orbitRadius = 4;
    tontontros.orbitTime = 1.5 * 60;
    tontontros.rotateTime = 60;
    tontontros.bloom = true;
    tontontros.accessible = true;
    tontontros.hasAtmosphere = true;
    tontontros.atmosphereColor = Color.valueOf("3db899");
    tontontros.atmosphereRadIn = 0.075;
    tontontros.atmosphereRadOut = 0.3;
    tontontros.startSector = 10;
    tontontros.alwaysUnlocked = true;
    tontontros.localizedName = "Tantros";




    const antarcticaSurvival = new SectorPreset("fork", tontontros, 1);
    antarcticaSurvival.captureWave = 60;
    antarcticaSurvival.localizedName = "Fork";
    antarcticaSurvival.difficulty = 6;
    antarcticaSurvival.alwaysUnlocked = true;


});
