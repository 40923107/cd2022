var tipuesearch = {"pages": [{'title': 'About', 'text': '', 'tags': '', 'url': 'About.html'}, {'title': '每週筆記', 'text': '', 'tags': '', 'url': '每週筆記.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': '網路環境設定', 'text': '下載 cadlab_network_setup.zip，重新開機，以管理員權限執行ipv6_network_setup.bat \n \n', 'tags': '', 'url': '網路環境設定.html'}, {'title': '建立倉儲', 'text': '先在Github建立cd2022倉儲 \n \n \n 然後開啟start_ipv6.bat \n \n \n \n \n 在路徑\xa0 tmp>cd2022>cmsimde>up_dir \n 全選  up_dir 的資料貼到 cd2022資料夾 \n \n \n 接著在  tmp>cd2022>cmsimde \n 選擇以下的東西貼至 cd2022資料夾 \n \n \n 到資料夾路徑為 tmp>cd2022>cmsimde>up_dir \n 複製以下的檔案貼至  cd2022 ，取代檔案 \n \n 然後建立Token，再 cms、acp 推送 \n \n \n 建立 token  \n 創建  Token ，命名為倉儲名稱，到期日改  No expiration ，勾選  repo ，創建完成後複製  code \n \n 開啟自己倉儲資料夾中.git 裡的 config，在https:// 後面貼上複製的 code，後面加上 @ 並儲存。 \n \n \n \n', 'tags': '', 'url': '建立倉儲.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': '建立小組倉儲', 'text': '先到小組的github網站，按Fork，複製網址，開啟cmd \n cd tmp git clone --recurse-submodules https://github.com/自己學號/cd2022ag2-2.git \n 建立一個小組的token \n 完成後先git pull，然後cms，編輯完acp推送(每次推送或編輯前都要先 git pull) \n 回到小組github，點New pull request，creat一個新的，組長再去小組 github 的 pull requests 點 merge 合併 \n 組長要改分支(branch none改main)才能看到靜態網站。 \n', 'tags': '', 'url': '建立小組倉儲.html'}, {'title': '分組名單', 'text': '# cd2022_gen_html.py\nstudList = "cd2022.txt"\ncourTitle = "cd2022"\n \n# group title initial\ngrpTitle = studList[:6] + "-ag"\n \n# student Account and github Account as inputs\ndef perWeb(s, g):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + courTitle + "\\">" + s + " web</a>"\n    print(pSite)\n \ndef perRepo(s, g):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + courTitle + "\\">" + s + " repo</a>"\n    print(pSite)\n     \ndef grpWeb(s, g, ord):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + grpTitle + str(ord) + "\\">grp web</a>"\n    print(pSite)\n     \ndef grpRepo(s, g, ord):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + grpTitle + str(ord) + "\\">grp repo</a>"\n    print(pSite)\n \n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open(studList) as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n \ngrpCount = 0\nfor i in range(len(data)):\n    # grpCount is the group order\n    grpCount = grpCount + 1\n    group = data[i].rstrip("\\n").split("\\t")\n    # use filter to remove vacant string element\n    # use [1:] to remove first element\n    group = list(filter(None, group))[1:]\n    print(grpTitle + str(grpCount) + "<br />")\n    for j in range(0, len(group), 2):\n        # s is the student number\n        s = group[j]\n        # g is the github account\n        g = group[j+1]\n        perWeb(s, g)\n        print("|")\n        perRepo(s, g)\n        print("|")\n        print("<br />") \n \n cd2022-ag1   a40923101 web  |  a40923101 repo  |    40923103 web  |  40923103 repo  |    40923108 web  |  40923108 repo  |    40923137 web  |  40923137 repo  |    40923154 web  |  40923154 repo  |    ZHILIN-0817 web  |  ZHILIN-0817 repo  |    40923119 web  |  40923119 repo  |    40971134 web  |  40971134 repo  | \n  cd2022-ag2   40923102 web  |  40923102 repo  |    40923104 web  |  40923104 repo  |    40923105 web  |  40923105 repo  |    40923106 web  |  40923106 repo  |    40923107 web  |  40923107 repo  |    40923110 web  |  40923110 repo  | \n  cd2022-ag3   CYC40923109 web  |  CYC40923109 repo  |    40923111 web  |  40923111 repo  |    40923114 web  |  40923114 repo  |    jason60714 web  |  jason60714 repo  |    40923122 web  |  40923122 repo  |    40923129 web  |  40923129 repo  |    a40923146 web  |  a40923146 repo  |    40923148 web  |  40923148 repo  | \n  cd2022-ag4   40923116 web  |  40923116 repo  |    40923124 web  |  40923124 repo  |    40923125 web  |  40923125 repo  |    40923126-1 web  |  40923126-1 repo  |    40923127-1 web  |  40923127-1 repo  |    40923128 web  |  40923128 repo  | \n  cd2022-ag5   40923123 web  |  40923123 repo  |    40923133 web  |  40923133 repo  |    40923134 web  |  40923134 repo  |    40923135 web  |  40923135 repo  |    40923139 web  |  40923139 repo  |    40923142 web  |  40923142 repo  |    40923151 web  |  40923151 repo  | \n  cd2022-ag6   40923113 web  |  40923113 repo  |    40923113 web  |  40923113 repo  |    40923140 web  |  40923140 repo  |    40923144 web  |  40923144 repo  |    40923149r web  |  40923149r repo  |    40923150 web  |  40923150 repo  |    40923152 web  |  40923152 repo  | \n  cd2022-ag7   40623143 web  |  40623143 repo  |    40823132 web  |  40823132 repo  |    40823143 web  |  40823143 repo  |    Maxlee999 web  |  Maxlee999 repo  |    40923118 web  |  40923118 repo  |    40923120 web  |  40923120 repo  |    40923136-1 web  |  40923136-1 repo  |    40923143 web  |  40923143 repo  |    40923145 web  |  40923145 repo  |    40923147 web  |  40923147 repo  |    40923153 web  |  40923153 repo  |    40923121 web  |  40923121 repo  | \n  cd2022-ag8   40923131 web  |  40923131 repo  |    40923138 web  |  40923138 repo  |    40923157 web  |  40923157 repo  | \n', 'tags': '', 'url': '分組名單.html'}, {'title': 'NX1980', 'text': '在 28000@192.168.56.3 開頭打上 REM 變成註解。 \n \n \n', 'tags': '', 'url': 'NX1980.html'}, {'title': 'W3', 'text': 'NX操作 Wink \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W3.html'}]};