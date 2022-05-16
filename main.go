# To use native Python directories, use:
from subprocess import check_call

# On windows use:
def copy2clip(txt):
    cmd='echo '+txt.strip()+'|clip'
    return check_call(cmd, shell=True)

# On Mac use:
def copy2clip(txt):
    cmd='echo '+txt.strip()+'|pbcopy'
    return check_call(cmd, shell=True)

# Then to call the function use:
copy2clip('This is on my clipboard!')
