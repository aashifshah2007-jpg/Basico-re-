// PAYMENT MATHS. Pure functions with no page access. apps-script/Code.gs repeats the same maths on the server.
function priceOf(p){return p.salePrice!=null&&p.salePrice<p.price?p.salePrice:p.price}
function advanceFor(total,rule){
  if(!rule||rule.type==='none')return 0;
  if(rule.type==='full')return total;
  if(rule.type==='tiers'){const t=rule.tiers.find(t=>t.upTo==null||total<=t.upTo);return t?advanceFor(total,t.rule):0}
  let a=rule.type==='percent'?Math.round(total*rule.percent/100):(rule.amount||0);
  if(rule.min!=null)a=Math.max(a,rule.min);if(rule.max!=null)a=Math.min(a,rule.max);
  return Math.min(a,total);
}
// lines: [{id, qty}], catalog: {id: product}. Returns subtotal (regular prices), discount (sale prices), fee, total, advance, balance.
function calcOrder(lines,area,catalog,store){
  let subtotal=0,discount=0;
  lines.forEach(l=>{const p=catalog[l.id];subtotal+=p.price*l.qty;discount+=(p.price-priceOf(p))*l.qty});
  const fee=store.delivery[area].fee,total=subtotal-discount+fee,adv=store.payment.advance;
  const advance=adv&&(!adv.appliesTo||adv.appliesTo.indexOf(area)>=0)?advanceFor(total,adv.rule):0;
  return{subtotal,discount,fee,total,advance,balance:total-advance};
}
// Which payment choices the customer sees: 'cod', 'adv' (advance + balance on delivery), 'full'.
function paymentOptions(q,store){const m=store.payment.methods,o=[];
  if(q.advance>0){if(q.advance>=q.total){if(m.full)o.push('full')}else{if(m.advance)o.push('adv');if(m.full)o.push('full')}}
  else{if(m.cod)o.push('cod');if(m.full)o.push('full')}
  return o}
function policyText(store){const a=store.payment.advance,d=store.delivery,c=store.currency;
  const r=x=>x.type==='fixed'?c+' '+x.amount+' advance':x.type==='percent'?x.percent+'% advance':x.type==='full'?'full payment in advance':x.type==='tiers'?x.tiers.map(t=>(t.upTo?'up to '+c+' '+t.upTo+': ':'above: ')+r(t.rule)).join('; '):'no advance';
  return Object.keys(d).map(k=>d[k].label+': '+c+' '+d[k].fee+' delivery, '+(a&&(!a.appliesTo||a.appliesTo.indexOf(k)>=0)?r(a.rule)+(a.rule.type==='full'?'':', balance on delivery'):'cash on delivery')+'.').join(' ')}
