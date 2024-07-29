let menuIcon = document.querySelector('#menu-icon');
let navigationbuttons = document.querySelector('.navigation-buttons');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navigationbuttons.classList.toggle('active');
}



//Dark Mode Theme//
let dark = document.querySelector('#dark');
let light = document.querySelector('#light');

dark.onclick = () => {
    dark.classList.toggle('bxs-sun');
    light.classList.toggle('active');
}



var dark2 = document.getElementById('dark2');

dark2.onclick = function() {
    document.body.classList.toggle('dark-theme');
}





//For 2nd pages of manga (ALL)//

//My Hero Academia clickalble//
document.addEventListener('DOMContentLoaded', (event) => {
    const myheroAcademia = document.getElementById('my-hero-academia');
    const academia = document.getElementById('academia');
    const button = document.getElementById('back1');

    myheroAcademia.addEventListener('click', () => {
        if (academia.classList.contains('hidden')) {
            academia.classList.remove('hidden');
        } else {
            academia.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (myheroAcademia.classList.contains('hidden')) {
                myheroAcademia.classList.remove('hidden');
            } else {
                academia.classList.add('hidden');
            }
        }) 
    });
});

//Demon Slayer Clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const demonSlayer = document.getElementById('demon-slayer');
    const slayer = document.getElementById('slayer');
    const button = document.getElementById('back2');

    demonSlayer.addEventListener('click', () => {
        if (slayer.classList.contains('hidden')) {
            slayer.classList.remove('hidden');
        } else {
            slayer.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (demonSlayer.classList.contains('hidden')) {
                demonSlayer.classList.remove('hidden');
            } else {
                slayer.classList.add('hidden');
            }
        }) 
    });
});
//Kaiju No.8 Clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const kaijuNo8 = document.getElementById('kaiju-no8');
    const kaiju = document.getElementById('kaiju');
    const button = document.getElementById('back3');

    kaijuNo8.addEventListener('click', () => {
        if (kaiju.classList.contains('hidden')) {
            kaiju.classList.remove('hidden');
        } else {
            kaiju.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (kaijuNo8.classList.contains('hidden')) {
                kaijuNo8.classList.remove('hidden');
            } else {
                kaiju.classList.add('hidden');
            }
        }) 
    });
});
//Horimiya clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const HorimiyaHide = document.getElementById('horimiya-hide');
    const HorimiyaShow = document.getElementById('horimiya-show');
    const button = document.getElementById('back4');

    HorimiyaHide.addEventListener('click', () => {
        if (HorimiyaShow.classList.contains('hidden')) {
            HorimiyaShow.classList.remove('hidden');
        } else {
            HorimiyaShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (HorimiyaHide.classList.contains('hidden')) {
                HorimiyaHide.classList.remove('hidden');
            } else {
                HorimiyaShow.classList.add('hidden');
            }
        }) 
    });
});
//Tonikaku Kawaii clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const TonikakuHide = document.getElementById('tonikaku-hide');
    const TonikakuShow = document.getElementById('tonikaku-show');
    const button = document.getElementById('back5');

    TonikakuHide.addEventListener('click', () => {
        if (TonikakuShow.classList.contains('hidden')) {
            TonikakuShow.classList.remove('hidden');
        } else {
            TonikakuShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (TonikakuHide.classList.contains('hidden')) {
                TonikakuHide.classList.remove('hidden');
            } else {
                TonikakuShow.classList.add('hidden');
            }
        }) 
    });
});
//Rent a Girlfriend clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const RentingHide = document.getElementById('renting-hide');
    const RentingShow = document.getElementById('renting-show');
    const button = document.getElementById('back6');

    RentingHide.addEventListener('click', () => {
        if (RentingShow.classList.contains('hidden')) {
            RentingShow.classList.remove('hidden');
        } else {
            RentingShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (RentingHide.classList.contains('hidden')) {
                RentingHide.classList.remove('hidden');
            } else {
                RentingShow.classList.add('hidden');
            }
        }) 
    });
});
//Kaguya-sama clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const KaguyaHide = document.getElementById('kaguya-hide');
    const KaguyaShow = document.getElementById('kaguya-show');
    const button = document.getElementById('back7');

    KaguyaHide.addEventListener('click', () => {
        if (KaguyaShow.classList.contains('hidden')) {
            KaguyaShow.classList.remove('hidden');
        } else {
            KaguyaShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (KaguyaHide.classList.contains('hidden')) {
                KaguyaHide.classList.remove('hidden');
            } else {
                KaguyaShow.classList.add('hidden');
            }
        }) 
    });
});
//My Dress Up Darling clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const DarlingHide = document.getElementById('my-dressup-darling-hide');
    const DarlingShow = document.getElementById('my-dressup-darling-show');
    const button = document.getElementById('back8');

    DarlingHide.addEventListener('click', () => {
        if (DarlingShow.classList.contains('hidden')) {
            DarlingShow.classList.remove('hidden');
        } else {
            DarlingShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (DarlingHide.classList.contains('hidden')) {
                DarlingHide.classList.remove('hidden');
            } else {
                DarlingShow.classList.add('hidden');
            }
        }) 
    });
});
//Ao Haru Ride clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const HaruRideHide = document.getElementById('haru-ride-hide');
    const HaruRideShow = document.getElementById('haru-ride-show');
    const button = document.getElementById('back9');

    HaruRideHide.addEventListener('click', () => {
        if (HaruRideShow.classList.contains('hidden')) {
            HaruRideShow.classList.remove('hidden');
        } else {
            HaruRideShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (HaruRideHide.classList.contains('hidden')) {
                HaruRideHide.classList.remove('hidden');
            } else {
                HaruRideShow.classList.add('hidden');
            }
        }) 
    });
});
//Attack on Titan clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const AotHide = document.getElementById('aot-hide');
    const AotShow = document.getElementById('aot-show');
    const button = document.getElementById('back10');

    AotHide.addEventListener('click', () => {
        if (AotShow.classList.contains('hidden')) {
            AotShow.classList.remove('hidden');
        } else {
            AotShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (AotHide.classList.contains('hidden')) {
                AotHide.classList.remove('hidden');
            } else {
                AotShow.classList.add('hidden');
            }
        }) 
    });
});
//Bleach clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const BleachHide = document.getElementById('bleach-hide');
    const BleachShow = document.getElementById('bleach-show');
    const button = document.getElementById('back11');

    BleachHide.addEventListener('click', () => {
        if (BleachShow.classList.contains('hidden')) {
            BleachShow.classList.remove('hidden');
        } else {
            BleachShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (BleachHide.classList.contains('hidden')) {
                BleachHide.classList.remove('hidden');
            } else {
                BleachShow.classList.add('hidden');
            }
        }) 
    });
});
//Solo Leveling clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const LevelingHide = document.getElementById('solo-leveling-hide');
    const LevelingShow = document.getElementById('solo-leveling-show');
    const button = document.getElementById('back12');

    LevelingHide.addEventListener('click', () => {
        if (LevelingShow.classList.contains('hidden')) {
            LevelingShow.classList.remove('hidden');
        } else {
            LevelingShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (LevelingHide.classList.contains('hidden')) {
                LevelingHide.classList.remove('hidden');
            } else {
                LevelingShow.classList.add('hidden');
            }
        }) 
    });
});
//Jujutsu Kaisen clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const JujutsuHide = document.getElementById('jujutsu-hide');
    const JujutsuShow = document.getElementById('jujutsu-show');
    const button = document.getElementById('back13');

    JujutsuHide.addEventListener('click', () => {
        if (JujutsuShow.classList.contains('hidden')) {
            JujutsuShow.classList.remove('hidden');
        } else {
            JujutsuShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (JujutsuHide.classList.contains('hidden')) {
                JujutsuHide.classList.remove('hidden');
            } else {
                JujutsuShow.classList.add('hidden');
            }
        }) 
    });
});
//One Piece clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const OnePieceHide = document.getElementById('one-piece-hide');
    const OnePieceShow = document.getElementById('one-piece-show');
    const button = document.getElementById('back14');

    OnePieceHide.addEventListener('click', () => {
        if (OnePieceShow.classList.contains('hidden')) {
            OnePieceShow.classList.remove('hidden');
        } else {
            OnePieceShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (OnePieceHide.classList.contains('hidden')) {
                OnePieceHide.classList.remove('hidden');
            } else {
                OnePieceShow.classList.add('hidden');
            }
        }) 
    });
});
//Chainsawman clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const ChainsawmanHide = document.getElementById('chainsawman-hide');
    const ChainsawmanShow = document.getElementById('chainsawman-show');
    const button = document.getElementById('back15');

    ChainsawmanHide.addEventListener('click', () => {
        if (ChainsawmanShow.classList.contains('hidden')) {
            ChainsawmanShow.classList.remove('hidden');
        } else {
            ChainsawmanShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (ChainsawmanHide.classList.contains('hidden')) {
                ChainsawmanHide.classList.remove('hidden');
            } else {
                ChainsawmanShow.classList.add('hidden');
            }
        }) 
    });
});
//Darling in the Franxx clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const FranxxHide = document.getElementById('franxx-hide');
    const FranxxShow = document.getElementById('franxx-show');
    const button = document.getElementById('back16');

    FranxxHide.addEventListener('click', () => {
        if (FranxxShow.classList.contains('hidden')) {
            FranxxShow.classList.remove('hidden');
        } else {
            FranxxShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (FranxxHide.classList.contains('hidden')) {
                FranxxHide.classList.remove('hidden');
            } else {
                FranxxShow.classList.add('hidden');
            }
        }) 
    });
});
//Takagi-San clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const TakagiHide = document.getElementById('takagi-hide');
    const TakagiShow = document.getElementById('takagi-show');
    const button = document.getElementById('back17');

    TakagiHide.addEventListener('click', () => {
        if (TakagiShow.classList.contains('hidden')) {
            TakagiShow.classList.remove('hidden');
        } else {
            TakagiShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (TakagiHide.classList.contains('hidden')) {
                TakagiHide.classList.remove('hidden');
            } else {
                TakagiShow.classList.add('hidden');
            }
        }) 
    });
});
//Komi-san Can't Communicate clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const KomiHide = document.getElementById('komi-hide');
    const KomiShow = document.getElementById('komi-show');
    const button = document.getElementById('back18');

    KomiHide.addEventListener('click', () => {
        if (KomiShow.classList.contains('hidden')) {
            KomiShow.classList.remove('hidden');
        } else {
            KomiShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (KomiHide.classList.contains('hidden')) {
                KomiHide.classList.remove('hidden');
            } else {
                KomiShow.classList.add('hidden');
            }
        }) 
    });
});
//Yamada-kun clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const YamadaHide = document.getElementById('yamada-hide');
    const YamadaShow = document.getElementById('yamada-show');
    const button = document.getElementById('back19');

    YamadaHide.addEventListener('click', () => {
        if (YamadaShow.classList.contains('hidden')) {
            YamadaShow.classList.remove('hidden');
        } else {
            YamadaShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (YamadaHide.classList.contains('hidden')) {
                YamadaHide.classList.remove('hidden');
            } else {
                YamadaShow.classList.add('hidden');
            }
        }) 
    });
});
//God of Highschool clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const HighschoolHide = document.getElementById('highschool-hide');
    const HighschoolShow = document.getElementById('highschool-show');
    const button = document.getElementById('back20');

    HighschoolHide.addEventListener('click', () => {
        if (HighschoolShow.classList.contains('hidden')) {
            HighschoolShow.classList.remove('hidden');
        } else {
            HighschoolShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (HighschoolHide.classList.contains('hidden')) {
                HighschoolHide.classList.remove('hidden');
            } else {
                HighschoolShow.classList.add('hidden');
            }
        }) 
    });
});
//WindBreaker manhwa clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const WindBreakerHide = document.getElementById('WindBreaker-hide');
    const WindBreakerShow = document.getElementById('WindBreaker-show');
    const button = document.getElementById('back21');

    WindBreakerHide.addEventListener('click', () => {
        if (WindBreakerShow.classList.contains('hidden')) {
            WindBreakerShow.classList.remove('hidden');
        } else {
            WindBreakerShow.classList.add('hidden');
        }

        
        button.addEventListener('click', () => {
            if (WindBreakerHide.classList.contains('hidden')) {
                WindBreakerHide.classList.remove('hidden');
            } else {
                WindBreakerShow.classList.add('hidden');
            }
        }) 
    });
});
//The Beginning After the End clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const BeginningHide = document.getElementById('beginning-hide');
    const BeginningShow = document.getElementById('beginning-show');
    const button = document.getElementById('back22');

    BeginningHide.addEventListener('click', () => {
        if (BeginningShow.classList.contains('hidden')) {
            BeginningShow.classList.remove('hidden');
        } else {
            BeginningShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (BeginningHide.classList.contains('hidden')) {
                BeginningHide.classList.remove('hidden');
            } else {
                BeginningShow.classList.add('hidden');
            }
        }) 
    });
});
//Maritial Peak clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const MartialPeakHide = document.getElementById('martial-peak-hide');
    const MartialPeakShow = document.getElementById('martial-peak-show');
    const button = document.getElementById('back23');

    MartialPeakHide.addEventListener('click', () => {
        if (MartialPeakShow.classList.contains('hidden')) {
            MartialPeakShow.classList.remove('hidden');
        } else {
            MartialPeakShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (MartialPeakHide.classList.contains('hidden')) {
                MartialPeakHide.classList.remove('hidden');
            } else {
                MartialPeakShow.classList.add('hidden');
            }
        }) 
    });
});
//Readers Viewpoint manhwa clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const ViewpointHide = document.getElementById('viewpoint-hide');
    const ViewpointShow = document.getElementById('viewpoint-show');
    const button = document.getElementById('back24');

    ViewpointHide.addEventListener('click', () => {
        if (ViewpointShow.classList.contains('hidden')) {
            ViewpointShow.classList.remove('hidden');
        } else {
            ViewpointShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (ViewpointHide.classList.contains('hidden')) {
                ViewpointHide.classList.remove('hidden');
            } else {
                ViewpointShow.classList.add('hidden');
            }
        }) 
    });
});
//Blue Lock clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const BlueLockHide = document.getElementById('blue-lock-hide');
    const BlueLockShow = document.getElementById('blue-lock-show');
    const button = document.getElementById('back25');

    BlueLockHide.addEventListener('click', () => {
        if (BlueLockShow.classList.contains('hidden')) {
            BlueLockShow.classList.remove('hidden');
        } else {
            BlueLockShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (BlueLockHide.classList.contains('hidden')) {
                BlueLockHide.classList.remove('hidden');
            } else {
                BlueLockShow.classList.add('hidden');
            }
        }) 
    });
});
//Haikyuu clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const HaikyuuHide = document.getElementById('haikyuu-hide');
    const HaikyuuShow = document.getElementById('haikyuu-show');
    const button = document.getElementById('back26');

    HaikyuuHide.addEventListener('click', () => {
        if (HaikyuuShow.classList.contains('hidden')) {
            HaikyuuShow.classList.remove('hidden');
        } else {
            HaikyuuShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (HaikyuuHide.classList.contains('hidden')) {
                HaikyuuHide.classList.remove('hidden');
            } else {
                HaikyuuShow.classList.add('hidden');
            }
        }) 
    });
});
//Dr. Stone clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const StoneHide = document.getElementById('stone-hide');
    const StoneShow = document.getElementById('stone-show');
    const button = document.getElementById('back27');

    StoneHide.addEventListener('click', () => {
        if (StoneShow.classList.contains('hidden')) {
            StoneShow.classList.remove('hidden');
        } else {
            StoneShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (StoneHide.classList.contains('hidden')) {
                StoneHide.classList.remove('hidden');
            } else {
                StoneShow.classList.add('hidden');
            }
        }) 
    });
});
//Bungoy Stray Dogs clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const StrayDogsHide = document.getElementById('stray-dogs-hide');
    const StrayDogsShow = document.getElementById('stray-dogs-show');
    const button = document.getElementById('back28');

    StrayDogsHide.addEventListener('click', () => {
        if (StrayDogsShow.classList.contains('hidden')) {
            StrayDogsShow.classList.remove('hidden');
        } else {
            StrayDogsShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (StrayDogsHide.classList.contains('hidden')) {
                StrayDogsHide.classList.remove('hidden');
            } else {
                StrayDogsShow.classList.add('hidden');
            }
        }) 
    });
});
//Dragon Ball Super clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const DragonBallHide = document.getElementById('super-hide');
    const DragonBallShow = document.getElementById('super-show');
    const button = document.getElementById('back29');

    DragonBallHide.addEventListener('click', () => {
        if (DragonBallShow.classList.contains('hidden')) {
            DragonBallShow.classList.remove('hidden');
        } else {
            DragonBallShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (DragonBallHide.classList.contains('hidden')) {
                DragonBallHide.classList.remove('hidden');
            } else {
                DragonBallShow.classList.add('hidden');
            }
        }) 
    });
});
//Vinland Saga clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const VinlandHide = document.getElementById('vinland-hide');
    const VinlandShow = document.getElementById('vinland-show');
    const button = document.getElementById('back30');

    VinlandHide.addEventListener('click', () => {
        if (VinlandShow.classList.contains('hidden')) {
            VinlandShow.classList.remove('hidden');
        } else {
            VinlandShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (VinlandHide.classList.contains('hidden')) {
                VinlandHide.classList.remove('hidden');
            } else {
                VinlandShow.classList.add('hidden');
            }
        }) 
    });
});
//Hunter x Hunter clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const HunterHide = document.getElementById('hunter-hide');
    const HunterShow = document.getElementById('hunter-show');
    const button = document.getElementById('back31');

    HunterHide.addEventListener('click', () => {
        if (HunterShow.classList.contains('hidden')) {
            HunterShow.classList.remove('hidden');
        } else {
            HunterShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (HunterHide.classList.contains('hidden')) {
                HunterHide.classList.remove('hidden');
            } else {
                HunterShow.classList.add('hidden');
            }
        }) 
    });
});
//That Time I Got Reincarnated as a Slime clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const SlimeHide = document.getElementById('slime-hide');
    const SlimeShow = document.getElementById('slime-show');
    const button = document.getElementById('back32');

    SlimeHide.addEventListener('click', () => {
        if (SlimeShow.classList.contains('hidden')) {
            SlimeShow.classList.remove('hidden');
        } else {
            SlimeShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (SlimeHide.classList.contains('hidden')) {
                SlimeHide.classList.remove('hidden');
            } else {
                SlimeShow.classList.add('hidden');
            }
        }) 
    });
});
//Parasyte clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const ParasyteHide = document.getElementById('parasyte-hide');
    const ParasyteShow = document.getElementById('parasyte-show');
    const button = document.getElementById('back33');

    ParasyteHide.addEventListener('click', () => {
        if (ParasyteShow.classList.contains('hidden')) {
            ParasyteShow.classList.remove('hidden');
        } else {
            ParasyteShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (ParasyteHide.classList.contains('hidden')) {
                ParasyteHide.classList.remove('hidden');
            } else {
                ParasyteShow.classList.add('hidden');
            }
        }) 
    });
});
//Promised Neverland clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const NeverlandHide = document.getElementById('neverland-hide');
    const NeverlandShow = document.getElementById('neverland-show');
    const button = document.getElementById('back34');

    NeverlandHide.addEventListener('click', () => {
        if (NeverlandShow.classList.contains('hidden')) {
            NeverlandShow.classList.remove('hidden');
        } else {
            NeverlandShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (NeverlandHide.classList.contains('hidden')) {
                NeverlandHide.classList.remove('hidden');
            } else {
                NeverlandShow.classList.add('hidden');
            }
        }) 
    });
});
//Tokyo Ghoul clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const GhouldHide = document.getElementById('ghoul-hide');
    const GhoulShow = document.getElementById('ghoul-show');
    const button = document.getElementById('back35');

    GhouldHide.addEventListener('click', () => {
        if (GhoulShow.classList.contains('hidden')) {
            GhoulShow.classList.remove('hidden');
        } else {
            GhoulShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (GhouldHide.classList.contains('hidden')) {
                GhouldHide.classList.remove('hidden');
            } else {
                GhoulShow.classList.add('hidden');
            }
        }) 
    });
});
//Death Note clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const NoteHide = document.getElementById('note-hide');
    const NoteShow = document.getElementById('note-show');
    const button = document.getElementById('back36');

    NoteHide.addEventListener('click', () => {
        if (NoteShow.classList.contains('hidden')) {
            NoteShow.classList.remove('hidden');
        } else {
            NoteShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (NoteHide.classList.contains('hidden')) {
                NoteHide.classList.remove('hidden');
            } else {
                NoteShow.classList.add('hidden');
            }
        }) 
    });
});
//Wotakoi clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const WotakoiHide = document.getElementById('wotakoi-hide');
    const WotakoiShow = document.getElementById('wotakoi-show');
    const button = document.getElementById('back37');

    WotakoiHide.addEventListener('click', () => {
        if (WotakoiShow.classList.contains('hidden')) {
            WotakoiShow.classList.remove('hidden');
        } else {
            WotakoiShow.classList.add('hidden');
        }

        
        button.addEventListener('click', () => {
            if (WotakoiHide.classList.contains('hidden')) {
                WotakoiHide.classList.remove('hidden');
            } else {
                WotakoiShow.classList.add('hidden');
            }
        }) 
    });
});
//Bunny Girl Senpai clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const BunnyGirlHide = document.getElementById('bunny-girl-hide');
    const BunnyGirlShow = document.getElementById('bunny-girl-show');
    const button = document.getElementById('back38');

    BunnyGirlHide.addEventListener('click', () => {
        if (BunnyGirlShow.classList.contains('hidden')) {
            BunnyGirlShow.classList.remove('hidden');
        } else {
            BunnyGirlShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (BunnyGirlHide.classList.contains('hidden')) {
                BunnyGirlHide.classList.remove('hidden');
            } else {
                BunnyGirlShow.classList.add('hidden');
            }
        }) 
    });
});
//SNAFU clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const SnafuHide = document.getElementById('snafu-hide');
    const SnafuShow = document.getElementById('snafu-show');
    const button = document.getElementById('back39');

    SnafuHide.addEventListener('click', () => {
        if (SnafuShow.classList.contains('hidden')) {
            SnafuShow.classList.remove('hidden');
        } else {
            SnafuShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (SnafuHide.classList.contains('hidden')) {
                SnafuHide.classList.remove('hidden');
            } else {
                SnafuShow.classList.add('hidden');
            }
        }) 
    });
});
//Black Clover clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const CloverHide = document.getElementById('clover-hide');
    const CloverShow = document.getElementById('clover-show');
    const button = document.getElementById('back40');

    CloverHide.addEventListener('click', () => {
        if (CloverShow.classList.contains('hidden')) {
            CloverShow.classList.remove('hidden');
        } else {
            CloverShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (CloverHide.classList.contains('hidden')) {
                CloverHide.classList.remove('hidden');
            } else {
                CloverShow.classList.add('hidden');
            }
        }) 
    });
});
//Mashle clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const MashleHide = document.getElementById('mashle-hide');
    const MashleShow = document.getElementById('mashle-show');
    const button = document.getElementById('back41');

    MashleHide.addEventListener('click', () => {
        if (MashleShow.classList.contains('hidden')) {
            MashleShow.classList.remove('hidden');
        } else {
            MashleShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (MashleHide.classList.contains('hidden')) {
                MashleHide.classList.remove('hidden');
            } else {
                MashleShow.classList.add('hidden');
            }
        }) 
    });
});
//The Misfit of Demon King Academy clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const MisfitHide = document.getElementById('misfit-hide');
    const MisfitShow = document.getElementById('misfit-show');
    const button = document.getElementById('back42');

    MisfitHide.addEventListener('click', () => {
        if (MisfitShow.classList.contains('hidden')) {
            MisfitShow.classList.remove('hidden');
        } else {
            MisfitShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (MisfitHide.classList.contains('hidden')) {
                MisfitHide.classList.remove('hidden');
            } else {
                MisfitShow.classList.add('hidden');
            }
        }) 
    });
});
//Wind Breaker manga clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const BreakerHide = document.getElementById('wind-breaker-hide');
    const BreakerShow = document.getElementById('wind-breaker-show');
    const button = document.getElementById('back43');

    BreakerHide.addEventListener('click', () => {
        if (BreakerShow.classList.contains('hidden')) {
            BreakerShow.classList.remove('hidden');
        } else {
            BreakerShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (BreakerHide.classList.contains('hidden')) {
                BreakerHide.classList.remove('hidden');
            } else {
                BreakerShow.classList.add('hidden');
            }
        }) 
    });
});
//Tokyo Revengers clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const RevengersHide = document.getElementById('tokyo-revengers-hide');
    const RevengersShow = document.getElementById('tokyo-revengers-show');
    const button = document.getElementById('back44');

    RevengersHide.addEventListener('click', () => {
        if (RevengersShow.classList.contains('hidden')) {
            RevengersShow.classList.remove('hidden');
        } else {
            RevengersShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (RevengersHide.classList.contains('hidden')) {
                RevengersHide.classList.remove('hidden');
            } else {
                RevengersShow.classList.add('hidden');
            }
        }) 
    });
});
//Quintessential Quintuplets clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const QuintupletsHide = document.getElementById('quintuplets-hide');
    const QuintupletsShow = document.getElementById('quintuplets-show');
    const button = document.getElementById('back45');

    QuintupletsHide.addEventListener('click', () => {
        if (QuintupletsShow.classList.contains('hidden')) {
            QuintupletsShow.classList.remove('hidden');
        } else {
            QuintupletsShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (QuintupletsHide.classList.contains('hidden')) {
                QuintupletsHide.classList.remove('hidden');
            } else {
                QuintupletsShow.classList.add('hidden');
            }
        }) 
    });
});
//Chunibyo clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const ChunibyoHide = document.getElementById('chunibyo-hide');
    const ChunibyoShow = document.getElementById('chunibyo-show');
    const button = document.getElementById('back46');

    ChunibyoHide.addEventListener('click', () => {
        if (ChunibyoShow.classList.contains('hidden')) {
            ChunibyoShow.classList.remove('hidden');
        } else {
            ChunibyoShow.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (ChunibyoHide.classList.contains('hidden')) {
                ChunibyoHide.classList.remove('hidden');
            } else {
                ChunibyoShow.classList.add('hidden');
            }
        }) 
    });
});
//Add more clickable//
document.addEventListener('DOMContentLoaded', (event) => {
    const AddHide = document.getElementById('add-hide');
    const AddShow = document.getElementById('add-show');
    const button = document.getElementById('back47');

    AddHide.addEventListener('click', () => {
        if (AddShow.classList.contains('hidden2')) {
            AddShow.classList.remove('hidden2');
        } else {
            AddShow.classList.add('hidden2');
        }

        button.addEventListener('click', () => {
            if (AddHide.classList.contains('hidden2')) {
                AddHide.classList.remove('hidden2');
            } else {
                AddShow.classList.add('hidden2');
            }
        }) 
    });
});