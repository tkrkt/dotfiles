# custom prompt
#   user@host ~ $
export PS1='\[\033[01;32m\]\u@\h\[\033[01;34m\] \w \$\[\033[00m\] '

# ls shorthand
alias ls='ls -G'
alias ll='ls -lh'
alias la='ls -lhA'

# cd shorthand
alias ..='cd ..;ls'

# confirm overwrite
alias mv='mv -i'
alias cp='cp -i'

# open current directory in finder
alias f="open ."

# update date of the previous commit
alias amend='git commit --amend --no-edit --date "`date`"'
