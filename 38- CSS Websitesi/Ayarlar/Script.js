// JavaScript Document

/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ */ 
var baslangic=0;
function menuac(){
    var parametre = document.getElementById("HeaderMenuAcmaButonuMenuSinirlamaAlani");
    var maximum   = parametre.style.height; 
    var deger = parametre.style.display;
    if(deger == "none"){
        parametre.style.display = "block";
        var dongu = setInterval(function(){
            parametre.style.height = baslangic + "px";
            if(baslangic >= 121){
                clearInterval(dongu);
                baslangic=0;
            }
            baslangic = baslangic + 1;
        },1);
        
    }else{
        parametre.style.display = "none";
    }
}

/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ */ 

/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI */

var DokumanGenisligi = window.outerWidth;
if(document.getElementById("HeaderMesajAlani").length){
    if(DokumanGenisligi >= 1200){ /* XL */
        var OsfetDegeri  = 108;
    }else if((DokumanGenisligi>=992) && (DokumanGenisligi <= 1199)){  /* L */
        var OsfetDegeri  = 98;
    }else if((DokumanGenisligi>=768) && (DokumanGenisligi <= 991)){  /* M */
        var OsfetDegeri  = 88;
    }else if((DokumanGenisligi>=576) && (DokumanGenisligi <= 767)){  /* S */
        var OsfetDegeri  = 78;
    }else if(DokumanGenisligi<=574){  /* XS */
        var OsfetDegeri  = 73;
    }
}else{
    if(DokumanGenisligi >= 1200){ /* XL */
        var OsfetDegeri  = 148;
    }else if((DokumanGenisligi>=992) && (DokumanGenisligi <= 1199)){  /* L */
        var OsfetDegeri  = 138;
    }else if((DokumanGenisligi>=768) && (DokumanGenisligi <= 991)){  /* M */
        var OsfetDegeri  = 118;
    }else if((DokumanGenisligi>=576) && (DokumanGenisligi <= 767)){  /* S */
        var OsfetDegeri  = 108;
    }else if(DokumanGenisligi<=575){  /* XS */
        var OsfetDegeri  = 103;
    }
}
document.getElementById("main").style.top = OsfetDegeri + "px";
document.getElementById("footer").style.top = OsfetDegeri + "px";
function boyut(){
    setInterval(function(){
        var yeniDokuman = window.outerWidth;
        if(yeniDokuman != DokumanGenisligi){
            DokumanGenisligi = yeniDokuman;
            if(document.getElementById("HeaderMesajAlani").length){
                if(DokumanGenisligi >= 1200){ /* XL */
                    var OsfetDegeri  = 108;
                }else if((DokumanGenisligi>=992) && (DokumanGenisligi <= 1199)){  /* L */
                    var OsfetDegeri  = 98;
                }else if((DokumanGenisligi>=768) && (DokumanGenisligi <= 991)){  /* M */
                    var OsfetDegeri  = 88;
                }else if((DokumanGenisligi>=576) && (DokumanGenisligi <= 767)){  /* S */
                    var OsfetDegeri  = 78;
                }else if(DokumanGenisligi<=575){  /* XS */
                    var OsfetDegeri  = 73;
                }
            }else{
                if(DokumanGenisligi >= 1200){ /* XL */
                    var OsfetDegeri  = 148;
                }else if((DokumanGenisligi>=992) && (DokumanGenisligi <= 1199)){  /* L */
                    var OsfetDegeri  = 138;
                }else if((DokumanGenisligi>=768) && (DokumanGenisligi <= 991)){  /* M */
                    var OsfetDegeri  = 118;
                }else if((DokumanGenisligi>=576) && (DokumanGenisligi <= 767)){  /* S */
                    var OsfetDegeri  = 108;
                }else if(DokumanGenisligi<=575){  /* XS */
                    var OsfetDegeri  = 103;
                }
            }
            document.getElementById("main").style.top = OsfetDegeri + "px";
            document.getElementById("footer").style.top = OsfetDegeri + "px";
        }
    },100);
}

/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI */

/* SSS  İÇERİK GÖSTER / GİZLE */

function SSSacil(deger){
    var platform = deger.parentElement.getElementsByClassName("TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani")[0];
    if(platform.style.display == "none"){
        platform.style.display = "block";
    }else{
        platform.style.display = "none";
    }
}

/* SSS  İÇERİK GÖSTER / GİZLE */

/*
    Alışveriş Sepeti Fatura ve tesliamt adresleri formu gönder işlemi
*/
function AlisverisGonder(){
    document.getElementById("AlisverisSepetiFormu").submit();
}

/* ODEME SAYFASI SECIM ALANI */

function AlisverisOdemeSayfasiIcinOtomatikSayfaAcilimi(parametre){
    document.getElementById("KrediKartiOdemeAlani").style.display = "none";
    document.getElementById("MobilOdemeAlani").style.display = "none";
    document.getElementById("BankaHavalesiOdemeAlani").style.display = "none";

    var deger = parametre.value; 
    
    document.getElementById(deger + "OdemeAlani").style.display = "block";
}

/* ODEME SAYFASI SECIM ALANI */

/* ÜRÜN DETAY GÖSTERİM YERİ */

function UrunBuyutme(parametre){
    var deger = parametre.src;
    var buyukhal = document.getElementById("BuyukResim");
    buyukhal.src = deger;
}

/* ÜRÜN DETAY GÖSTERİM YERİ */

/* SLAYT ALANI */

function slayt(){
    var resimsirasi = 1;
    zaman	= window.setInterval(function (){
        var resim	 =  document.getElementById("SlaytResim");
        resimsirasi	 =	resimsirasi+1;
        if(resimsirasi>4){
            resimsirasi = 1;
        }else if(resimsirasi<1){
            resimsirasi = 10;
        }
        resim.src	= "Resimler/SlaytResmi" + resimsirasi + ".jpg";
    },3000);
}

/* SLAYT ALANI */