import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminSetup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      setMessage(`Conta criada! User ID: ${data.user?.id}. Agora você precisa adicionar o role admin no banco de dados para este user_id.`);
    } catch (err: any) {
      setMessage(`Erro: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="font-display text-2xl text-center">Criar conta Admin</h1>
        <p className="text-xs text-muted-foreground text-center">
          Após criar a conta, insira o role admin no banco usando o SQL:<br />
          <code className="bg-muted px-1 rounded">INSERT INTO user_roles (user_id, role) VALUES ('USER_ID', 'admin');</code>
        </p>
        <form onSubmit={handleSignup} className="space-y-4">
          <div><Label>Email</Label><Input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
          <div><Label>Senha</Label><Input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} /></div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Criando..." : "Criar conta"}
          </Button>
        </form>
        {message && <p className="text-sm text-foreground bg-muted p-3 rounded">{message}</p>}
      </div>
    </div>
  );
};

export default AdminSetup;
