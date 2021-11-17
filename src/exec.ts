import commercelayer, { CommerceLayerClient, QueryParamsRetrieve } from '@commercelayer/sdk'



const commercelayerInit = (flags: any): CommerceLayerClient => {

  const organization = flags.organization
  const domain = flags.domain
  const accessToken = flags.accessToken

  return commercelayer({
    organization,
    domain,
    accessToken,
  })

}


const executeAction = (resource: string, id: string, action: string, flags: any, fields?: string[]): Promise<any> => {

  const cl = commercelayerInit(flags)

  const res: any = { id }
  const trigger = `_${action}`
  res[trigger] = flags.value || true as unknown as undefined

  const params: QueryParamsRetrieve = {}
  if (fields && (fields.length > 0)) {
    params.fields = {} as { [key: string]: string[] }
    params.fields[resource] = fields
  }

  const resSdk: any = cl[resource as keyof CommerceLayerClient]
  const result = resSdk.update(res, params)

  return result

}


export default executeAction
