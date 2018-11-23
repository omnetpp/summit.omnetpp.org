function printMail(publicname, user, domain, extension)
{
  var at='@';
  var dot='.';
  var camou1='ma';
  var camou2='il';
  var camou3='to:';
  document.write('<a href="'+camou1+camou2+camou3+user+at+domain+dot+extension+'">'+publicname+'</a>');
}