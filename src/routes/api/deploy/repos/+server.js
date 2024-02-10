import { json, error as server_error } from '@sveltejs/kit'
import supabase_admin from '$lib/supabase/admin'
import axios from 'axios'

export async function GET({ locals, url }) {
  const session = await locals.getSession()
  if (!session) {
    // the user is not signed in
    throw server_error(401, { message: 'Unauthorized' })
  }

  const provider = url.searchParams.get('provider')

  const headers = {
  	Authorization: `Bearer ${token?.value}`,
  	Accept: 'application/vnd.github.v3+json'
  }

  return json(repos)
}
