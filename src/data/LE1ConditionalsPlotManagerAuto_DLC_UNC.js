import BioWorld from './LE1BioWorld';

const gv = BioWorld.GetGlobalVariables();

const F1754 = () => (gv.GetInt(131) === 1);
const F1755 = () => (gv.GetInt(131) === 2);
const F1758 = () => (gv.GetInt(131) === 0);
const F1761 = () => (gv.GetBool(7305) === false);
const F1762 = () => (gv.GetBool(7296) === true && gv.GetBool(7306) === false);
const F1763 = () => (gv.GetBool(7297) === true && gv.GetBool(7330) === false);
const F1764 = () => ((gv.GetBool(7332) === true && gv.GetBool(7333) === true) && gv.GetBool(7334) === true);
const F1765 = () => (gv.GetBool(7300) === true && gv.GetBool(7332) === false);
const F1766 = () => (gv.GetBool(7300) === true && gv.GetBool(7333) === false);
const F1767 = () => (gv.GetBool(7300) === true && gv.GetBool(7334) === false);
const F1768 = () => (((gv.GetBool(7315) === false && gv.GetBool(7316) === false) && gv.GetBool(7317) === false) && gv.GetBool(7327) === false);
const F1769 = () => (((gv.GetBool(7315) === true || gv.GetBool(7316) === true) || gv.GetBool(7317) === true) || gv.GetBool(7327) === true);
const F1770 = () => (gv.GetBool(7296) === false);
const F1771 = () => (gv.GetBool(7297) === false);
const F1772 = () => (gv.GetBool(7298) === false);
const F1773 = () => (gv.GetBool(7336) === false);
const F1774 = () => (gv.GetBool(7300) === true && ((gv.GetBool(7332) === false || gv.GetBool(7333) === false) || gv.GetBool(7334) === false) || gv.GetBool(7301) === true && ((gv.GetBool(7315) === false && gv.GetBool(7316) === false) && gv.GetBool(7327) === false));
const F1775 = () => (gv.GetBool(7301) === true);
const F1776 = () => (BioWorld.GetLocalIntegerVariable(0, 'GetIntimidateSkill') >= 2 || BioWorld.GetLocalIntegerVariable(0, 'GetCharmSkill') >= 2);
const F1777 = () => (gv.GetBool(7355) === true);
const F1778 = () => (gv.GetBool(7356) === true);
const F1779 = () => (gv.GetBool(7357) === true);
const F1780 = () => (gv.GetBool(7359) === true);
const F1781 = () => (((gv.GetBool(7296) === true && gv.GetBool(7297) === true) && gv.GetBool(7298) === true) && gv.GetBool(7403) === false || (((gv.GetBool(7413) === true || gv.GetBool(7424) === true) || gv.GetBool(7425) === true) || gv.GetBool(7426) === true) && gv.GetBool(7418) === false);
const F1789 = () => (gv.GetBool(7404) === false);
const F1790 = () => (gv.GetBool(7405) === true && gv.GetBool(7404) === false);
const F1791 = () => (gv.GetBool(7296) === true && gv.GetBool(7406) === false);
const F1792 = () => (gv.GetInt(136) === 1);
const F1793 = () => (gv.GetInt(136) === 0 && gv.GetBool(7405) === true);
const F1794 = () => ((gv.GetBool(7364) === true && (gv.GetBool(7359) === true || gv.GetBool(7362) === true) || gv.GetBool(7359) === true && (gv.GetBool(7364) === true || gv.GetBool(7362) === true)) || gv.GetBool(7362) === true && (gv.GetBool(7364) === true || gv.GetBool(7359) === true));
const F1795 = () => ((gv.GetBool(7364) === true && gv.GetBool(7359) === true) && gv.GetBool(7362) === true);
const F1796 = () => ((gv.GetBool(7364) === true || gv.GetBool(7359) === true) || gv.GetBool(7362) === true);
const F1797 = () => (gv.GetBool(7412) === true && gv.GetInt(1) === 2);
const F1798 = () => (gv.GetBool(7405) === true || gv.GetBool(7406) === true);
const F1799 = () => ((gv.GetBool(7364) === false && gv.GetBool(7359) === false) && gv.GetBool(7362) === false);
const F1800 = () => (gv.GetInt(136) === 0);
const F1801 = () => (gv.GetBool(7427) === true);
const F1802 = () => ((gv.GetBool(7359) === true && gv.GetBool(7364) === true) && gv.GetBool(7362) === false);
const F1803 = () => ((gv.GetBool(7359) === true && gv.GetBool(7362) === true) && gv.GetBool(7364) === false);
const F1804 = () => ((gv.GetBool(7364) === true && gv.GetBool(7362) === true) && gv.GetBool(7359) === false);
const F1805 = () => ((gv.GetBool(7359) === true && gv.GetBool(7364) === true) && gv.GetBool(7362) === true);
const F1806 = () => ((gv.GetBool(7362) === false && gv.GetBool(7364) === true) && gv.GetBool(7359) === false);
const F1807 = () => ((gv.GetBool(7362) === false && gv.GetBool(7364) === false) && gv.GetBool(7359) === true);
const F1808 = () => ((gv.GetBool(7362) === true && gv.GetBool(7364) === false) && gv.GetBool(7359) === false);
const F1809 = () => (gv.GetBool(7363) === true);
const F1810 = () => (gv.GetBool(7429) === true);
const F1811 = () => (gv.GetBool(7430) === true);
const F1812 = () => (gv.GetBool(7431) === true);
const F1813 = () => (gv.GetBool(7432) === true);
const F1814 = () => (gv.GetBool(7433) === true);
const F1815 = () => (gv.GetBool(7434) === true);
const F1816 = () => (gv.GetBool(7435) === true);
const F1817 = () => ((gv.GetInt(136) === 1 && gv.GetBool(7296) === true || gv.GetInt(136) === 2 && gv.GetBool(7297) === true) || gv.GetInt(136) === 3 && gv.GetBool(7298) === true);
const F1818 = () => (!((gv.GetBool(7296) === true && gv.GetBool(7297) === true) && gv.GetBool(7298) === true || gv.GetBool(7424) === true));
const F1819 = () => (gv.GetBool(7355) === false);
const F1820 = () => (gv.GetBool(7356) === false);
const F1821 = () => (gv.GetBool(7357) === false);
const F1822 = () => (gv.GetBool(7432) === false);
const F1823 = () => (gv.GetBool(7433) === false);
const F1824 = () => (gv.GetBool(7434) === false);
const F1825 = () => (gv.GetBool(7363) === false);
const F1826 = () => (gv.GetBool(7440) === true);
const F1827 = () => (gv.GetBool(7299) === false);
const F1828 = () => (gv.GetInt(137) === 3 && gv.GetBool(7441) === false);
const F1829 = () => (gv.GetInt(136) === 3 && gv.GetBool(7441) === false);
const F1830 = () => (gv.GetInt(135) === 3 && gv.GetBool(7441) === false);
const F1831 = () => (((gv.GetBool(7299) === true && gv.GetBool(7441) === false) && gv.GetBool(7443) === false) && gv.GetBool(7442) === false);
const F1832 = () => (gv.GetBool(7418) != true && gv.GetBool(7403) === true);
const F2015 = () => (gv.GetBool(7320) === false);
const F2016 = () => (gv.GetBool(7321) === false);
const F2017 = () => (gv.GetBool(7322) === false);
