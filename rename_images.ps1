
$dir = "c:\Users\Administrator\Desktop\나비창 홈페이지\나비창 홈페이지 매장\public\images\롤블라인드"
cd $dir

# Function to safely rename
function Safe-Rename ($old, $new) {
    if (Test-Path $old) {
        Rename-Item -Path $old -NewName $new -ErrorAction SilentlyContinue
        Write-Host "Renamed $old to $new"
    } else {
        Write-Host "File not found: $old"
    }
}

Safe-Rename "롤블라인드.jpg" "roll_blind_main.jpg"
Safe-Rename "롤블라인드 트렌솔.png" "roll_trensoll.png"
Safe-Rename "롤블라인드 카프리.png" "roll_capri.png"
Safe-Rename "롤 라데나.png" "roll_radena.png"
Safe-Rename "롤 퓨로룩스RR 1% 방염.jpg" "roll_purolux_1_fr.jpg"
Safe-Rename "롤 퓨로룩스RR 3% 방염.jpg" "roll_purolux_3_fr.jpg"
Safe-Rename "롤 카멜레온 3%방염.jpg" "roll_chameleon_3_fr.jpg"
Safe-Rename "롤 썬스크린AT 3%방염.jpg" "roll_sunscreen_at_3_fr.jpg"
Safe-Rename "롤썬스크린AT 1% 방염.jpg" "roll_sunscreen_at_1_fr.jpg"
Safe-Rename "롤 아카디아 암막.jpg" "roll_arcadia_blackout.jpg"
Safe-Rename "롤 메스티아.jpg" "roll_mestia.jpg"
Safe-Rename "롤 솔트레이크 암막,방염.jpg" "roll_saltlake_blackout_fr.jpg"
Safe-Rename "롤 타히티.jpg" "roll_tahiti.jpg"
Safe-Rename "롤 체로키 암막.jpg" "roll_cherokee_blackout.jpg"
Safe-Rename "롤 마칼루 암막.jpg" "roll_makalu_blackout.jpg"
Safe-Rename "롤 트레비.jpg" "roll_trevi.jpg"
Safe-Rename "롤모레아.jpg" "roll_moray.jpg"
Safe-Rename "롤토리노 암막,방염.jpg" "roll_torino_blackout_fr.jpg"
Safe-Rename "롤레인.jpg" "roll_rain.jpg"
Safe-Rename "롤 글리터.jpg" "roll_glitter.jpg"
Safe-Rename "롤 레놀라 암막,방염.jpg" "roll_lenola_blackout_fr.jpg"
Safe-Rename "롤 레놀라 암막.jpg" "roll_lenola_blackout.jpg"
Safe-Rename "롤 엘바스.jpg" "roll_elbas.jpg"
Safe-Rename "롤체로키 암막,방염.jpg" "roll_cherokee_blackout_fr.jpg"
Safe-Rename "롤 밀레 퍼펙트 암막,방염.jpg" "roll_millet_perfect_blackout_fr.jpg"
Safe-Rename "롤 썬플렛 방염.jpg" "roll_sunflat_fr.jpg"
Safe-Rename "롤 로터스 암막.jpg" "roll_lotus_blackout.jpg"
Safe-Rename "롤 에코플렛.jpg" "roll_ecoflat.jpg"
Safe-Rename "롤썬스크린TW방염.jpg" "roll_sunscreen_tw_fr.jpg"
Safe-Rename "롤썬스크린DP 방염.jpg" "roll_sunscreen_dp_fr.jpg"
Safe-Rename "롤 솔티스99 방염.jpg" "roll_soltis99_fr.jpg"
Safe-Rename "롤 솔티스99방염 Aiu.jpg" "roll_soltis99_alu_fr.jpg"
Safe-Rename "롤썬스크린 3N1%방염.jpg" "roll_sunscreen_3n1_fr.jpg"
Safe-Rename "롤썬스크린 3N3%메탈방염.jpg" "roll_sunscreen_3n3_metal_fr.jpg"
Safe-Rename "롤썬스크린 3N3%방염.jpg" "roll_sunscreen_3n3_fr.jpg"
Safe-Rename "롤 누벨 암막,방염.jpg" "roll_nouvelle_blackout_fr.jpg"
Safe-Rename "롤 엑셀 암막,방염.jpg" "roll_excel_blackout_fr.jpg"
Safe-Rename "롤 에코스크린 방염.jpg" "roll_ecoscreen_fr.jpg"
Safe-Rename "롤 에코스크린 폼 암막,방염.jpg" "roll_ecoscreen_foam_blackout_fr.jpg"
Safe-Rename "롤 파스텔 방염.jpg" "roll_pastel_fr.jpg"
Safe-Rename "롤 마일드.jpg" "roll_mild.jpg"
Safe-Rename "롤 비비드.jpg" "roll_vivid.jpg"
Safe-Rename "롤 신디방염.jpg" "roll_cindy_fr.jpg"
