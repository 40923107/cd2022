var tipuesearch = {"pages": [{'title': 'About', 'text': '個人網站： https://40923107.github.io/cd2022/content/index.html \n 個人倉儲： https://github.com/40923107/cd2022 \n 大組網站： https://40923107.github.io/cd2022ag2/content/index.html \n 大組倉儲： https://github.com/40923107/cd2022ag2 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w14', 'text': '\n \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'midterm', 'text': 'W7任務： \n 1.利用隨身程式系統編譯 SCARA robot 模擬系統. \n 2.繪製 Pick and Place demo 範例所需的零組件，自訂連桿尺寸，並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬。 \n 當前進度： 1.已完成 2.已完成零件繪製。 \n \n W8任務： \n 1.uarm 各零件工程圖 \n uarm_Solvespace 零件檔 \n uarm_工程圖 \n \n 2.uarm 組合圖 STL 格式轉入 CoppeliaSim \n 3.GUI slider 控制前三軸作動 \n 4.cmsimde 中第一階頁面, 標題為 midterm \n 5.網誌名稱為 midterm.html \n 6.流程與心得簡報 \n \n', 'tags': '', 'url': 'midterm.html'}, {'title': '每週筆記', 'text': '', 'tags': '', 'url': '每週筆記.html'}, {'title': 'ssh 設定', 'text': '透過 SSH 協定，參與組長帳號下的分組倉儲內容協同編輯 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'ssh 設定.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': '網路環境設定', 'text': '下載 cadlab_network_setup.zip，重新開機，以管理員權限執行ipv6_network_setup.bat \n \n', 'tags': '', 'url': '網路環境設定.html'}, {'title': '建立倉儲', 'text': '先在Github建立cd2022倉儲 \n \n \n 然後開啟start_ipv6.bat \n \n \n \n \n 在路徑\xa0 tmp>cd2022>cmsimde>up_dir \n 全選  up_dir 的資料貼到 cd2022資料夾 \n \n \n 接著在  tmp>cd2022>cmsimde \n 選擇以下的東西貼至 cd2022資料夾 \n \n \n 到資料夾路徑為 tmp>cd2022>cmsimde>up_dir \n 複製以下的檔案貼至  cd2022 ，取代檔案 \n \n 然後建立Token，再 cms、acp 推送 \n \n \n 建立 token  \n 創建  Token ，命名為倉儲名稱，到期日改  No expiration ，勾選  repo ，創建完成後複製  code \n \n 開啟自己倉儲資料夾中.git 裡的 config，在https:// 後面貼上複製的 code，後面加上 @ 並儲存。 \n \n \n \n', 'tags': '', 'url': '建立倉儲.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': '建立小組倉儲', 'text': '先到小組的github網站，按Fork，複製網址，開啟cmd \n cd tmp git clone --recurse-submodules https://github.com/自己學號/cd2022ag2-2.git \n 建立一個小組的token \n 完成後先git pull，然後cms，編輯完acp推送(每次推送或編輯前都要先 git pull) \n 回到小組github，點New pull request，creat一個新的，組長再去小組 github 的 pull requests 點 merge 合併 \n 組長要改分支(branch none改main)才能看到靜態網站。 \n', 'tags': '', 'url': '建立小組倉儲.html'}, {'title': '分組名單', 'text': '# cd2022_teacher.py\nstudList = "cd2022_teacher.txt"\ncourTitle = "cd2022"\n \n# group title initial\ngrpTitle = studList[:6] + "ag"\n \n# student Account and github Account as inputs\ndef perWeb(s, g):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + courTitle + "\\">" + s + " web</a>"\n    print(pSite)\n \ndef perRepo(s, g):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + courTitle + "\\">" + s + " repo</a>"\n    print(pSite)\n     \ndef grpWeb(s, g, ord):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + grpTitle + str(ord) + "\\">grp web</a>"\n    print(pSite)\n     \ndef grpRepo(s, g, ord):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + grpTitle + str(ord) + "\\">grp repo</a>"\n    print(pSite)\n \n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open(studList) as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n \ngrpCount = 0\nfor i in range(len(data)):\n    # grpCount is the group order\n    grpCount = grpCount + 1\n    group = data[i].rstrip("\\n").split("\\t")\n    # use filter to remove vacant string element\n    # use [1:] to remove first element\n    group = list(filter(None, group))[1:]\n    print(grpTitle + str(grpCount) + "<br />")\n    for j in range(0, len(group), 2):\n        # s is the student number\n        s = group[j]\n        # g is the github account\n        g = group[j+1]\n        perWeb(s, g)\n        print("|")\n        perRepo(s, g)\n        print("|")\n        grpWeb(s, g, grpCount)\n        print("|")\n        grpRepo(s, g, grpCount)\n        print("<br />") \n \n cd2022ag1   40923101 web  |  40923101 repo  |  grp web  |  grp repo     40923103 web  |  40923103 repo  |  grp web  |  grp repo     40923108 web  |  40923108 repo  |  grp web  |  grp repo     40923119 web  |  40923119 repo  |  grp web  |  grp repo     40923137 web  |  40923137 repo  |  grp web  |  grp repo     40923154 web  |  40923154 repo  |  grp web  |  grp repo     40923156 web  |  40923156 repo  |  grp web  |  grp repo     40971134 web  |  40971134 repo  |  grp web  |  grp repo    cd2022ag2   40923102 web  |  40923102 repo  |  grp web  |  grp repo     40923104 web  |  40923104 repo  |  grp web  |  grp repo     40923105 web  |  40923105 repo  |  grp web  |  grp repo     40923106 web  |  40923106 repo  |  grp web  |  grp repo     40923107 web  |  40923107 repo  |  grp web  |  grp repo     40923110 web  |  40923110 repo  |  grp web  |  grp repo     40923121 web  |  40923121 repo  |  grp web  |  grp repo     40923153 web  |  40923153 repo  |  grp web  |  grp repo    cd2022ag3   40923109 web  |  40923109 repo  |  grp web  |  grp repo     40923111 web  |  40923111 repo  |  grp web  |  grp repo     40923114 web  |  40923114 repo  |  grp web  |  grp repo     40923115 web  |  40923115 repo  |  grp web  |  grp repo     40923122 web  |  40923122 repo  |  grp web  |  grp repo     40923129 web  |  40923129 repo  |  grp web  |  grp repo     40923146 web  |  40923146 repo  |  grp web  |  grp repo     40923148 web  |  40923148 repo  |  grp web  |  grp repo    cd2022ag4   40923116 web  |  40923116 repo  |  grp web  |  grp repo     40923124 web  |  40923124 repo  |  grp web  |  grp repo     40923125 web  |  40923125 repo  |  grp web  |  grp repo     40923126 web  |  40923126 repo  |  grp web  |  grp repo     40923127 web  |  40923127 repo  |  grp web  |  grp repo     40923128 web  |  40923128 repo  |  grp web  |  grp repo     40923138 web  |  40923138 repo  |  grp web  |  grp repo     40923143 web  |  40923143 repo  |  grp web  |  grp repo    cd2022ag5   40923123 web  |  40923123 repo  |  grp web  |  grp repo     40923131 web  |  40923131 repo  |  grp web  |  grp repo     40923133 web  |  40923133 repo  |  grp web  |  grp repo     40923134 web  |  40923134 repo  |  grp web  |  grp repo     40923135 web  |  40923135 repo  |  grp web  |  grp repo     40923139 web  |  40923139 repo  |  grp web  |  grp repo     40923142 web  |  40923142 repo  |  grp web  |  grp repo     40923151 web  |  40923151 repo  |  grp web  |  grp repo    cd2022ag6   40923113 web  |  40923113 repo  |  grp web  |  grp repo     40923130 web  |  40923130 repo  |  grp web  |  grp repo     40923140 web  |  40923140 repo  |  grp web  |  grp repo     40923144 web  |  40923144 repo  |  grp web  |  grp repo     40923145 web  |  40923145 repo  |  grp web  |  grp repo     40923149 web  |  40923149 repo  |  grp web  |  grp repo     40923150 web  |  40923150 repo  |  grp web  |  grp repo     40923152 web  |  40923152 repo  |  grp web  |  grp repo    cd2022ag7   40823132 web  |  40823132 repo  |  grp web  |  grp repo     40823143 web  |  40823143 repo  |  grp web  |  grp repo     40923117 web  |  40923117 repo  |  grp web  |  grp repo     40923118 web  |  40923118 repo  |  grp web  |  grp repo     40923120 web  |  40923120 repo  |  grp web  |  grp repo     40923136 web  |  40923136 repo  |  grp web  |  grp repo     40923147 web  |  40923147 repo  |  grp web  |  grp repo     40923157 web  |  40923157 repo  |  grp web  |  grp repo \n', 'tags': '', 'url': '分組名單.html'}, {'title': '下載NX1980', 'text': '在 28000@192.168.56.3 開頭打上 REM 變成註解。 \n \n \n', 'tags': '', 'url': '下載NX1980.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': '建立小組、大組倉儲', 'text': '\n 1.先到小組的 github 網站，按 Fork，複製小組網址 \n \n \n 2.開啟 cmd，在 tmp 裡 clone 小組倉儲 \n \n git clone --recurse-submodules 小組網址.git \n \n 3.接著建立一個小組的token \n \n \n 4.Pull request 再回到小組 github 網站，點 New pull request、creat，組長再去小組 github 的 pull requests 點 merge 同意合併。 \n \n \n \n \n', 'tags': '', 'url': '建立小組、大組倉儲.html'}, {'title': 'NX操作Wink', 'text': '圖檔 \n 參考影片： \n NX Tutorial 1 - View Controls - Version 1855 \n https://www.youtube.com/watch?v=GUaa97tALxE&list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl&index=1&t=171s \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n ---------------- \n \n 參考影片： \n TECH 4472 - Homework 01 \n \n https://www.youtube.com/watch?v=6CtAJe9acr4&list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl&index=2&t=269s \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'NX操作Wink.html'}, {'title': 'W4', 'text': '小組與大組開會，彙整各組員執行任務的進度， 利用網頁簡報呈現執行流程與結果。 \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W6', 'text': '任務： 建立個人 Blog 並查驗 \n \n 建立過程 \n 1.在 cmd 輸入 leo 啟動 Leo E ditor \n \n \n 2.開啟檔案(config資料夾中的 pelican.leo \n \n \n \n \xa0 3.在 @edit pelicanconf.py 可更網誌編輯者名稱及標題。 \n \n \n \n 4.在 @edit publishconf.py 中，將 SITEURL 改為自己網站中的 Blog 網址 \n \n \n \n 5.編輯 pages 目錄中的 .md 檔案，皆改為自己網站的網址。 \n \n \xa0 \n \n 6.以@edit為檔名開頭，存為 .md 檔案， Slug 更改為當週查驗的標題。 \n \n \n \n 7.先在自己倉儲資料夾下的 markdown 中，新增 images 資料夾，再到 Leo 右鍵點 local-blog 、GOto Script，再用左鍵點 \xa0local-blog。 \n \n \n \n 8.最後回到 cmd ，在自己的倉儲直接 acp 推送 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '繪製 Pick and Place demo 範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案. \n 工作分配 \n NX1980：40923102 Solvespace：40923104 Onshape：40923106 NX2008：40923107 NX12：40923110 \n \n NX2008 \n Pick and Place demo 零組件 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8 uarm', 'text': '工作分配 Onshape：40923104、40932106  NX1980：40923102、40923110  Solvespace：40923105、40923107 \n \n 以 Solvespace 完成各零件 工程圖 與 組合圖 後, 將 uarm 組合件轉為\xa0 STL 格式後轉入 CoppeliaSim \n \n uarm_Solvespace 零件檔 \n uarm_工程圖 \n \n \n Solvespace 操作 \n 繪製任何草圖前，先 sketch in new work plane 可選擇座標平面或可定義三軸座標的零件任意處(可點一個面、2或3條軸)。 \n Solvespace-Property Browser 對話框 active：歷程 \n extrude plane sketch one-sided：單向長料 two-sided：雙向長料 \n solid model as union：聯集(長料，不可與零件本體重疊) difference：差異(除料) assemble：組合(長料，可與零件本體重疊) intersection：反向除料 \n \n', 'tags': '', 'url': 'W8 uarm.html'}, {'title': 'W9', 'text': '自評成績 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'W10_block_ui', 'text': '利用 Block UI Styler 建立表單, 用來控制 block.prt 零件的長寬與高 \n', 'tags': '', 'url': 'W10_block_ui.html'}, {'title': 'w10_ssh', 'text': '\n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10_ssh.html'}, {'title': 'W11', 'text': '解決 透過 SSH 協定時， 合併衝突的問題 \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ----------------------------------------------------------- \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '任務 \n 1.cd2022_uarm_nx12_imported.7z 中, 若計入重複引用的零件, 總數有多少?請列出組成此一 uarm 機械手臂所需的 BOM 列表. \n A:155個 ,  列表 \n \n 2.若不計入重複引用的零件, 總數有多少?請列出各零件名稱. \n A:個別零件總數為58 \n \n 3.當執行機械手臂的設計過程中, 若已知各零件所擬採用的零件材料密度, 請問此一設計中的 uarm 機械手臂的淨重量為多少? (uArm-Swift-Specifications.pdf) \n A:30% 零件採 Steel 製, 其餘採 Aluminum 製, 總重量約 2.2205kg 全部零件採 Aluminum 製, 總重量約 1.4123kg 全部零件採 Steel 製, 總重量約 4.1062kg \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'NXOpen Python', 'text': '\n \n \n \n \n \n \n \n \n 實際操作 \n \n \n \n \n \n', 'tags': '', 'url': 'NXOpen Python.html'}]};