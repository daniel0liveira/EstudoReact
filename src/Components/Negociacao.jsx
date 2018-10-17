import React, { Component } from 'react';
import Preco from './Preco/Preco'
import Quantidade from './Quantidade/Quantidade';
import axios from 'axios';
import './Negociacao.css'
import Negociado from './ValorNegociado/Negociado';

export default class Negociacao extends Component {

    state = {
        neg: []
    }


    componentDidMount() {
        axios.get('https://usj.comlink.com.br/api/v1/cotacao/300094/ordernarpor/x/ascoudesc/a', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer OZtFCbm6D-ffPn_zYJKup7eKgmbhBye-b6NGSuiud8Rsy_qyFqLY1Uluio4rdD9-qdBtcms3FRaL6tf9lc2HnRBv4cST9igujPG6SWUW5UnzEAH977nHoMzKGXh43ZEppOglbThlrayjiVFdUCXCBXiCfXWxy4R_ljWuSdk8Eu-JOECS6RpCdBqGGpt8ytpEt8xPPQv_5ys3wnOzPsCwuGWY7sQJRpDMCTysTSiuQBxlEPjj0-WxVlFvmffkc6t1Bai3FvSGjF3yLj14c-cge2H98GCFEmUX3mynLBoFFH4aabbEFKjHm4XhPr4ZCUa5gBNzeGpMwQc02oKQESfGd9y-tQ6BAT0sFo3lYSljKcew8cgMKTqUQ19sRs1cSgOQj6aDR8xh_TYrppLPjjxU4LycEpo3Q851PJHCjCnbCabtD-ewPpE_vDqaXa1trtBygg0GdV9DOKaBDkDflxV1rwqpt1WE2H7_3gnt7uotB96wA4KRg_FMCXpOYIFOHzrorOMl3UsFFuXIvbjAssy8DMdF55gyYVINYuk6-qBUba5GUXAO7sgW8MZkacfA2-OoHmwWgfeYJdYyvyji5NguSYk9LhnKqPI4B2wA5X840uKL_eZpcxMMMiVts-pzITtaGGIQdj-at4HcW94Gre2JpaF5NHDzF0M3-nHjqD0_3Ji29mFpnrx3dLgOYgdC_JD8Zw559DSGR_are1z19SGG5WAbYyNb3SIMMJBOBKCVKoMKa93G2Of_gpyyq4fc0zW-k7T28-z_tVyuoPKpFq1VPZcRUgosqg9t2Q90lFSAIlb52jIsYH8PBOkgbqQWLfBib444ikO9SobLj6wvizfx-bZBicEftaMBxGK9oac57r6cDYHz39O-Gf2hB6N-jAhMyvVRWxXwLoi0iGb7wnDZg04PIc9NPg9qtI0aPrcS5e8s6nBtg8WEKepJm2qSrDqr1rGbmnkituJH_GnbMHPHryoNJLo5WGvudkRisB72p82YUm3CINeC3YxUcbnRqXlAmvSNdi6FdoeZ1y6Q0NUkobT3MKqkpIxFLDyigcNu0gfWF_-ow0ygWa7cAynxyZJlT5o7VzrPsYBDrLkxfH9bmMVIy8NPolU2P-GNQ_61NDObdu4wwWmKdBL32dLMFxmknOYqnYU-Cy6tseu5DSW5MnA-Vz-I5eCAPXu74xqMH-4AEk2FtUIbN6oBiiau8qTyTKgdGaFvzO1_2FOOZWIBCcVZTKSZj4FIYueaQx9JO1whVNJHLGTeb3bjNXAYm8awrg-27Xed5B26i35DxEqVwRzpjliz0zuPTeYhmZmkKLOUjRYMtqeoY-BOI-A5GMdMjXRjExN6252guovBL_TgjQPxkRexo5kZZRiJmGrmRW3CLwrV8uaoal4Dh495OPqa3_En8StHfw4S8dlvo8h714NM3FKWE_CXpd9BLheA-ItOx4fKoHq-yHB3lY3_4CCRamy8sDDUstGWgx8RlWRMhLEWlk4giGsR5bSEdWL70yrex6e9aKE4nrFgxQYfqHVkOZJYs0S58S5RDrP-ThHWiPX7NxCcr2lDaHJR0Jbz6XRDHAPv5m9imOfXhy6auK9SLUlrXXqDRVIdIkoaJxpZBYIY5yZHd-XODryZ23U9sHP6UcoXi59TY3NvRSYr5V1V6cyp5SG_Ag0PUy-GyPCAVW7P9f8Y2NJdT2sgGhZhkNjKdz5k5AJcnUEWAUDpreoFJ5ztO3_JqAZewYr6HiD6kyMho92AsHUhVciWmzQCRssdBKkEN-WMIuY2t_p8cA4034oRJnqZPP2tyMvc8tCeQvd5n2ppSJziuD7FkDQsitrwZIEck2aqDBTENZywfTFKTA9H4o-22F5ZpcZk9uAUiff9J_O3Z8icUtctHsHq5drstYjqGS9bYuHSsVLq12LLFSj8-KAR6RxKCXOzNDWcIvC-5aGrbRYx3xRwYN7nqaIdtbK-1g3bLCvSNpsNvfSl5Z4BSJniinG1ahj112QUlJbe7yEAxK2m3Ea1VR34pWvZPVcczs-KY-f3dOSYMpkpPoZzqaEMKlhUmB2axj7bGEUETKrEZ-jOCAXzrLjh650SAZmBGTn7EMWrBgUPHV_FxnKS_oX270MR_sHvxhOhctRBRddAG2eT_Yiivp46YXdu7mI4FBB0iWtEVJ6zBo0qWWyW_IlO8Y_ldEWZpl0V1U8wnIa29XOQAeTgG9QmunOZC2pUknTaapv0cucS2zv2E-ljnDDCQ2wE5HyxH9kEKooj_Dh5DFLFNqm5Mf6fogKLb2z45Lwu4uZC9ig8xoCQ_oWBI2kKY6FHLKvwcE7KpqLFZiUmpjdQ9hnsKNKO4TbPS2Eb_a_jOw5-KQ18Eeibp4fkLOiko0MVWr7FSHrUDr9TuU29MAgeFyNEAAj2x3WvU-4TP7f5MruxU908gNSrNqN33FSQLJ3lMW86gQcJY1RlknR87f3RSjSJql_SFPnHBqEbpq6MscK7Me0oAozOpBddcntRdjWJI7hQJXIvmbt4JBNFJc0NMDiKcd-lPQzgUbUMaYL2FyrivDJZoNosAuhM6dHi0LRdtoBEwZm4SEbh38j1loAqcW-dObgxEfdsEZH9bwB2qbhOmhwt-opCmNVP308m5eEUvBk1DkDI-N4HkcBDAW0etpRnp9sGVkzbzrWSV_PwjIAdgxc0Qd0QxNAZPCOUZQHrQ7yxh07a30RRcvTwQXSPcH2DrebNPb_0XtDCHkzpUYGJL4ZhZ47IwauNBeSh9unM88BlaOk8CzMiCdULAlsIVO1gRY6mPjbcCCEap6pZmarwly-LESAp9-mbSBrRirUblwvk9Kp2JWRMHOnGLE5FK_xqrOFt2izFExnLyTTYkgwJ--g0w0btPL3WTG_HyTP073biFJ-3QYY2NxLPMsp3aX-rpfcyka2IYj50ldDEDIPKBMMT_qhzls2Zu_s111Oa1N4xpAGEouBGyNxuNOplgAN07K9gGOxo5ccZEfM26dn6Xq3rCHtQ-TXkm1KF5OWVKZGvMxO1RSFTlWhl4ShTCCHvHRbulS61_A6HbM8K9FqNbD6EDSJ_lS8F6-yDhJltiNw-4exroQC29YmsJQZEb_E6yLj7_7IHyy5RnTEjXyiQ31-_DXyZrfGkxuYGmT3yugv_USvKOWaiF9L27hPmVjucfqUjd9w56qIatWK0t1_5AlJsgZ4Ht71jBmuBVT9MTlTwRkPvYGqF9DVnOv9SKwm7OQTK9fFdR0NYyIUh8wTBeOIl2wf_8-WWHmZdGPjezECT9-lMrZcsEA4PKXOuLNrhaxYCJHJnBXetYyIQuIVOTph7J6Tf-dNuVNOaTfQsZAmwIoqNV14vq_MS4LxDuBfX5YA1b43O_-j7GUotURkoV58b7WUOfGEznACIuqBRYU_Z7C7_LUjULQ_WPAbh7aye0Xs6_yZ2f1Upgr9lWV-pLTo3vIh5rvNv3Df2PGrj5C9RIJzkE019ERC_3xPEwhBdFI4qcHECKlV-fNr9KobqWLVwm0K409zNFGVQ0gEdy9MqVe5akciUpvms-ZXFlqib9GW9fe0FGSdK-OSgvzUiE-KOUmQcsF2TGCXVIEBgC75bP9-I6mDC3vZBDfF_fb8o64XCTGWqKPHXa66Mu6KG2GuRlR2DqtsuwAmjK-H3FpVOVvIWNur1HwuUtn2hWIhhsyPXg_1K0q6VDL4ZKH1lbVMjsBOo2MXZ2hm8noWY7gT1xy0U_uBt3qhbetYu9UL9lyFs9P-H-8dr6vcASbjoFbdeTqTKTHqZcXdmT19E2GAK4GfkHXIQSt7VMeWJQnX9Ne2aZ-jLK-gbC7ctxfsbEv0EdMANuffIzC7xN_uaZ8w2oPUlYgKKvMK6J2mD1DY9ISb3-bMJBIAKNEM2zMhg-HSEmk1D552OPKqBqo02GDKXgusq_WEWUigPxpbZYSYaKAeCDkRp8C2pEe6dme-1l28kkwKDHjJmq-BGQkcELRsw2tg2W7Js_cYyWcKfTc5QL536ANRfGCYbB5RFGz1YKj4oDOh5hMI5yj4LJAC-Z3HryeybE6JkwNJTzY-jO1kJpMQKPnCAqIv0HY3kGwkO7eKR0pwPJXgGJQdeHUFS7btm2Isf78BDvr0aso9KsOeIQfQK_rOpPanPirj784Ai-Am18XWcDgtDEHfD29CXUpTimCWSqEV3c01NYouiekBns7zOLfmUwXli3M-_Yhal5hSJpBnt0S2qutB6gLvrAbkJyN6V38jiE0q9v9qZE32psXOBg5YpW8IkfSUDjkHEjVpibAT39WxD-S5a2-wp7IIELsSakLHsv6KPCxmZXeXcC3GtZUKupr2q5xqFdcDL9fQH4nkXPO-TX7e5TJoU_4vn1BrCKEmemDjkY4Cr-FjQShdd-ds4Y-zeEGp1uwCF142dVjiIdIZty8hcbT1EE3HA79turEXCkDnuFt84AkCiUlf9BGSjIIde7L_L3P9uxt7YF1D2joIEp3Qzz_2iyP59nhaaNwWMhQuJtWKnhWt5H_I_6ivod_fB-9X9E815_PjUiId9fJ437OQLYpItrw0T8WxNnb9l7jXQZpTPm-0hnlOo_7yt-htuALtlGc3owqg-o8yed5wDhQQpVBWTeJ0h-LpJdIdIzUX1yCOYgRxcZXHUYQISBezHe2_jjBTgrj-v1VjrCgnZycgbZYu5GsB35MK0pg'
            }
        }).then(r => {

            const f = r.data;

            this.setState({ neg: f.negociacoes });
            console.log(this.state.neg);

        })
    }

    render() {
        return (
            <div className="container-fluid">
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <td>Item</td>
                            <td>Descricao</td>
                            <td>Ultima Compra</td>
                            <td>UC</td>
                            <td>Negociacao</td>
                            <td>Qtd</td>
                            <td>F</td>
                            {
                                this.state.neg.length > 0 &&
                                this.state.neg[1].respostasFornecedores.map((r, i) => {
                                    return (
                                        <td key={i}>
                                            {r.nomeFornecedor}
                                        </td>
                                    )
                                })

                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.neg.map(neg => {
                                if (neg.tipoRegistro === "0") {
                                    return (
                                        <tr key={neg.idx} className="bg-primary">
                                            <td>{neg.codigoItem}</td>
                                            <td colSpan="33">{neg.descricao}</td>
                                        </tr>)
                                } else {
                                    return (
                                        <tr key={neg.idx}>
                                            <td >{neg.codigoItem}</td>
                                            <td>{neg.descricao}</td>
                                            <td>{neg.precoUltimaCompra}</td>
                                            <td>0</td>
                                            <td>{
                                                <Negociado valorNegociado={neg.valorNegociado}></Negociado>
                                            }</td>
                                            <td>{
                                                <Quantidade quantidade={neg.qtdNegociada}></Quantidade>
                                            }</td>
                                            <td>{neg.posicaoFornecedorNegociado}</td>
                                            {neg.respostasFornecedores.map((res, i) => {
                                                return (
                                                    <Preco preco={res} i={i}></Preco>
                                                )
                                            })}
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}