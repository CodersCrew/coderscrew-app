import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import { Container, Button, Link } from "@chakra-ui/react"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Container>
      <LoginForm
        onSuccess={() => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
          router.push(next)
        }}
      />
      <Button mt="2rem" isFullWidth variant="outline" colorScheme="google">
        <Link href="/api/auth/google">
          <a className="button small">
            <strong>Sign In with Google</strong>
          </a>
        </Link>
      </Button>
    </Container>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
