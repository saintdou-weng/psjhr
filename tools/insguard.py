import sys,re
g=open('/home/claude/psjhr/tools/del-guard.js',encoding='utf-8').read().strip()+'\n'
for p in sys.argv[1:]:
    s=open(p,encoding='utf-8').read()
    if '/* DEL-GUARD BEGIN' in s:
        s=re.sub(r'/\* DEL-GUARD BEGIN.*?/\* DEL-GUARD END \*/\n?',lambda m:g,s,flags=re.S)
    elif p.endswith('.html'):
        i=s.find('<script')
        s=s[:i]+'<script>\n'+g+'</script>\n'+s[i:]
    else:
        s=g+s
    open(p,'w',encoding='utf-8').write(s); print('ok',p)
