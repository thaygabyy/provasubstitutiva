

import { db } from "@/services/firebase"
import { child, get, ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {
  
  const id = req.query.id

  if (req.method == 'GET') {

    get(child(ref(db), 'pais')).then(snapshot=>{

      const retorno = []

      snapshot.forEach(item=>{
        retorno.push(item.val())
      })
      res.status(200).json(retorno)

    })

  } else if (res.method == 'POST') {

    const uuid = v4()
  const dados = req.body
  dados.id = uuid

  set(ref(db, 'pais/' + uuid), dados)
  }

}
