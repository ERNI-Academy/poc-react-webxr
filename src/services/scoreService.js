import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rwgytamqsknjrqaedebn.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPA_KEY;

class ScoreService {
  constructor() {
    this.client = createClient(supabaseUrl, supabaseKey);
  }
  async getScores() {
    let { data: scores, error } = await this.client
      .from("public_scores")
      .select("*")
      .order("score", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(10);
    return scores || [];
  }
  async insertScore(score) {
    const { error } = await this.client
      .from("scores")
      .insert([{ name: score.name, score: score.score, email: score.email }], {
        returning: "minimal",
      });
    return { error };
  }

  async getPosition(score = 0) {
    const { count } = await this.client
      .from("public_scores")
      .select("*", { count: "exact", head: true })
      .gt("score", score);
    return count + 1;
  }
}

export const scoreService = new ScoreService();
