import React from "react"
import s from "./Post.module.css"

export const Post = (props) => {


    return (
        <div className={s.item}>
            <img
                src="https://yandex-images.clstorage.net/kc53ac138/614558JjnyJ_/iwqGBzjy2eiTY_wopBV55y17eaa8KVJxaWZcZS7hZ4Y0lsKfx8C-6yawlE0M-KBHI7XG4Ul8QbQaz70zEhpWWu8-R7bcAnn4k1MsuRSFCVeti_nn_Fl39BjTeSR7FLYSNAOECXBC6d1EE6P_LnoEh1M15vW4_CBi7L9odqdfgA6oiuZkHQFZOucSzCrnB4nyTJloYT79sBCPovrlHnR3QWDEJvjh8dquNdAwf7waZdfjJjSFf75xcp2Lu8WmXXMsGhk0d29yaYvm4ezK58WYg1-oqHIcriOSr_LoVe239NFRV5W7AGDozOTBoDxcyBdE08bk930vUaCPKOsG538DX9oKh8atcmkLZPAvesTXiFCNy1gAbm2jkL5hqeedJ-ahokR36rEBal6kMSNPHsvElQBGBdYc_pPBven5BZcuUo9Kq_VkzuI7iwaSjSt11EjBT8gqUH4fgtJfMXlHrCZlEUJURapSw-mOxMDTfwzaplcBxiQ1fm6iwm7KyEfVn8MN2UgHBvwwmrvFMM-pR1YY8O7ICWIfnkJzb5L4pz83tsGwROaqUKLq7xQRgk8seddnwLe1lxwu8UCP6ElG968gXhjIFFWMALs751MOmoaHaJMcq4nwza4gMi_zyoceJjWDAyaG-RPzW85X8iINnWoXxAEVNsTdvFGDbQnJNuR_4_7aKgQ1TpGZObTAPKrFFzjRX6saUuz8QDJN0Fu1bPXXUpBWJUkjE7icpaCTvn3Id6Uz5JWHfn1zIT4YWpc1vwG9i0mWBWwBCsmHIxz411RrUvyLyfA-zMFxzpBJhS20xhBhlCfKYNBJT7SSwE_f-CREIrTWBX7uw0CPGUk0pm6gT_oaRBVtAGuJ5cNumVYXSCNvyYqQXj7T0B0wSdWuB4SCQsTG-iIymm82QmHP_3lFtlCmlHbdbiOhjah5ZhefUV95S8f1X4Go2ObBzknk1KlwnoqIID6egGHPI5tFY" alt=""/>
            {props.message}
            <div>
                <span>Likes </span>{props.likesCount}
            </div>
        </div>
    )
}